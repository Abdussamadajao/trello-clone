"use client";
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "react-beautiful-dnd";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { images } from "next/dist/build/webpack/config/blocks/images";

type TodoCardProps = {
  todo: Todo;
  index: number;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};
const TodoCard = ({
  todo,
  draggableProps,
  dragHandleProps,
  innerRef,
  index,
  id,
}: TodoCardProps) => {
  return (
    <div
      className="bg-white rounded-md space-y-2 drop-shadow-md"
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      <div className={"flex justify-between items-center p-5"}>
        <p>{todo.title}</p>
        <button className={"text-red-500 hover:text-red-600 "}>
          <XCircleIcon className="h-8 w-8 ml-5" />
        </button>
      </div>
      {/*{imageUrl}*/}
    </div>
  );
};

export default TodoCard;
