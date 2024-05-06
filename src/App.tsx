import { useState } from "react";
import "./index.css";
const App = () => {
  const [Tasks, setTasks] = useState([
    { taskName: "Task1", id: 0, status: "Waiting" },
    { taskName: "Task2", id: 1, status: "Waiting" },
    { taskName: "Task3", id: 2, status: "Waiting" },
    { taskName: "Task4", id: 3, status: "Waiting" },
    { taskName: "Task5", id: 4, status: "Waiting" },
    { taskName: "Task6", id: 5, status: "Waiting" },
    { taskName: "Task7", id: 6, status: "Waiting" },
    { taskName: "Task8", id: 7, status: "Waiting" },
    { taskName: "Task9", id: 8, status: "Waiting" },
    { taskName: "Task10", id: 9, status: "Waiting" },
    { taskName: "Task11", id: 10, status: "Waiting" },
    { taskName: "Task12", id: 11, status: "Waiting" },
    { taskName: "Task13", id: 12, status: "Waiting" },
    { taskName: "Task14", id: 13, status: "Waiting" },
    { taskName: "Task15", id: 14, status: "Waiting" },
    { taskName: "Task16", id: 15, status: "Waiting" },
    { taskName: "Task17", id: 16, status: "Waiting" },
    { taskName: "Task18", id: 17, status: "Waiting" },
  ]);
  const [isDraged, setIsDraged] = useState(false);
  const onDragStart = (event: any, id: any) => {
    event.dataTransfer.setData("id", id);
    setIsDraged(true);
  };
  const onDrop = (event: any, status: string) => {
    let id = event.dataTransfer.getData("id");
    let newTasks = Tasks.filter((task) => {
      if (task.id == id) {
        task.status = status;
      }
      return task;
    });
    setTasks([...newTasks]);
    setIsDraged(false);
  };

  return (
    <div className="w-screen h-screen font-mono bg-black items-center justify-start py-[100px] flex flex-col text-white">
      <div className="w-[80%]  flex items-start justify-center gap-[10px]">
        <div className="w-[30%]  ">
          <h1 className="w-full flex items-center justify-center text-[18px] text-blue-400  font-bold">
            Waiting
          </h1>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              onDrop(e, "Waiting");
            }}
            className={`${
              isDraged ? "border-dashed" : ""
            } h-[500px] scrollpy-[10px] border-[3px] transition-all duration-300  border-blue-400  rounded-xl   overflow-y-auto py-[10px] px-[10px]`}
          >
            {Tasks.filter((task) => task.status === "Waiting").length > 0 ? (
              Tasks.filter((task) => task.status === "Waiting").map((task) => (
                <div
                  onDragEnd={() => setIsDraged(false)}
                  onDragStart={(e) => onDragStart(e, task.id)}
                  draggable
                  className=" h-[50px] px-[10px] item w-full flex items-center border my-[5px]"
                >
                  {task.taskName}
                </div>
              ))
            ) : (
              <div className="w-full h-[400px]"></div>
            )}
          </div>
        </div>
        <div className="w-[30%]  ">
          <h1 className="w-full flex items-center justify-center text-[18px] text-yellow-400  font-bold">
            On Proccess
          </h1>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              onDrop(e, "OnPoroccess");
            }}
            className={`${
              isDraged ? "border-dashed" : ""
            } h-[500px] scrollpy-[10px] border-[3px] transition-all duration-300  border-yellow-400  rounded-xl   overflow-y-auto py-[10px] px-[10px]`}
          >
            {Tasks.filter((task) => task.status === "OnPoroccess").length >
            0 ? (
              Tasks.filter((task) => task.status === "OnPoroccess").map(
                (task) => (
                  <div
                    onDragEnd={() => setIsDraged(false)}
                    onDragStart={(e) => onDragStart(e, task.id)}
                    draggable
                    className=" h-[50px] px-[10px] item w-full flex items-center border my-[5px]"
                  >
                    {task.taskName}
                  </div>
                )
              )
            ) : (
              <div className="w-full h-[450px]"></div>
            )}
          </div>
        </div>
        <div className="w-[30%]  ">
          <h1 className="w-full flex items-center justify-center text-[18px] text-green-400  font-bold">
            Success
          </h1>
          <div
            onDragOver={(e) => {
              e.preventDefault(), console.log("aaaa");
            }}
            onDrop={(e) => {
              onDrop(e, "sucess");
            }}
            className={`${
              isDraged ? "border-dashed" : ""
            } h-[500px] scrollpy-[10px] border-[3px] transition-all duration-300  border-green-400  rounded-xl   overflow-y-auto py-[10px] px-[10px]`}
          >
            {Tasks.filter((task) => task.status === "sucess").length > 0 ? (
              Tasks.filter((task) => task.status === "sucess").map((task) => (
                <div
                  onDragStart={(e) => onDragStart(e, task.id)}
                  onDragEnd={() => setIsDraged(false)}
                  draggable
                  className=" h-[50px] px-[10px] item w-full flex items-center border my-[5px]"
                >
                  {task.taskName}
                </div>
              ))
            ) : (
              <div className="w-full h-[400px]"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
