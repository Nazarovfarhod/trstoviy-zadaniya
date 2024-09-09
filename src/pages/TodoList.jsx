import { Form, useActionData } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import { FormInput } from "../components";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";
import { useGlobalContext } from "../hooks/useGlobalContext";

// Action function
export const action = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  return { title };
};

function TodoList() {
  const { user } = useGlobalContext();
  const { data } = useCollection(
    "todos",
    ["uid", "==", user.uid],
    ["createdAt"]
  );
  const dataTodo = useActionData();


  const [title, setTitle] = useState(false);


  const handleDelete = (id) => {
    deleteDoc(doc(db, "todos", id))
      .then(() => {
        toast.success("Deleted todo.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleCompleted = (id, status) => {
    const todoRef = doc(db, "todos", id);

    updateDoc(todoRef, {
      completed: !status,
    })
      .then(() => {
        toast.success("Updated!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    if (dataTodo?.title) {
      const newTodo = {
        ...dataTodo,
        completed: false,
        createdAt: serverTimestamp(),
        uid: user.uid,
      };

      addDoc(collection(db, "todos"), newTodo)
        .then(() => {
          toast.success("New todo added!");
          setTitle("");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  }, [dataTodo, user.uid]);

  return (
    <div className="container max-mx-auto min-h-[600px] rounded-xl p-5">
      {data &&
        data.map((todo) => (
          <div key={todo.id} className="flex flex-col w-full">
            <div
              className={`${
                todo.completed ? "opacity-35 line-through" : "opacity-100"
              }`}
            >
              <h2 className="text-3xl text-center font-serif font-medium">
                {todo.title}
              </h2>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleCompleted(todo.id, todo.completed)}
                className="btn btn-success px-14 my-5"
              >
                Completed
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="btn btn-danger px-14 my-5"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

      <div>
        <Form method="post">
          <FormInput
            name="title"
            label="Title :"
            type="text"
            placeholder="Create new Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button className="btn btn-info btn-block" disabled={title}>
            Add
          </button>
        </Form>
      </div>
    </div>
  );
}

export default TodoList;
