"use client";
import Header from "./Header";
import Food from "./data/Food";
import Products from "./data/Products";

import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();

  return (
    <div
      className={` flex flex-col flex-1 justify-between space-y-16  m-auto  p-4 relative  hover:z-0 `}
    >
      <Header />
      <Food />
      <Products />
    </div>
  );
}

export default Home;

// ( ( ( ( ( (      Configuration to get all documents        ))))))
// const [todos, setTodos] = useState<ListData>();
// const [loading, setLoading] = useState(false)

// useEffect(() => {
//   setLoading(true)
//   const getTodos = database.listDocuments("645742f1acfa7ac60606","64574308c221d002643e");
//  getTodos.then((res : any) => {
//     setTodos(res)
//     console.log("todos Data",res)
//   },(error) => {
//         console.log(error)
//    });
//    setLoading(false)
// }, []);
// console.log("todos" , todos)

// const deleteListItem = (id : string) => {
//     const deleLi = database.deleteDocument("645742f1acfa7ac60606","64574308c221d002643e", id);
//     deleLi.then((res : any) => {
//         setTodos(res)
//         console.log("this item deleted successfully",res)
//       },(error) => {
//             console.log(error)
//     });
//     window.location.reload();
// }

{
  /* {loading ?  (
                <p>Loading</p>
            ) : (
                <div className="">
                   {
                    todos && todos.documents.map((item) => (
                        <div className="" key={item.$id}>
                            <div className="">{ item.Item_name }</div>
                            <span className="px-4 py-2 cursor-pointer  bg-gray-200"  onClick={() => deleteListItem(item.$id)}>
                                 <span> deleteList </span>
                            </span>
                        </div>
                    ))
                   }
                </div>
            )} */
}
