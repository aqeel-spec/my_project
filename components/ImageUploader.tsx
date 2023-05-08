"use client";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

const ImageUploader = () => {
  const [files, setFile] = useState<File[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(null);
    const selectedFiles: any = e.target.files;
    const newFiles: File[] = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const fileType = selectedFiles[i].type;
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

      if (validImageTypes.includes(fileType)) {
        newFiles.push(selectedFiles[i]);
      } else {
        setMessage("only images accepted");
      }
    }

    setFile([...files, ...newFiles]);
  };

  //  const imgUrl = URL.createObjectURL(files[0]);

  const removeImage = (name: string) => {
    setFile(files.filter((file) => file.name !== name));
  };

  return (
    <div className="relative h-auto flex justify-center items-center  px-2">
      <div className="p-3 md:w-1/2 w-[360px] rounded-md">
        {message && (
          <span className="flex justify-center items-center bg-white text-[12px] mb-1 text-red-500">
            {message}
          </span>
        )}

        <div className="h-32 w-full overflow-hidden relative shadow-md border-2 items-center rounded-md cursor-pointer border-gray-400 border-dotted">
          <input
            type="file"
            onChange={handleFile}
            className="h-full w-full opacity-0 z-10 absolute"
            multiple
            name="files[]"
          />

          <div className="h-full w-full bg-gray-200 absolute z-1 flex justify-center items-center top-0">
            <div className="flex flex-col">
              <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
              <span className="text-[12px]">{`Drag and Drop a file`}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {files.map((file, key) => (
            <div
              key={key}
              className="w-full h-16 flex items-center justify-between rounded p-3 bg-white"
            >
              <div className="flex flex-row items-center gap-2">
                <div className="h-12 w-12 ">
                  <img
                    className="w-full h-full rounded"
                    src={URL.createObjectURL(file)}
                  />
                </div>
                <span className="truncate w-44">{file.name}</span>
              </div>
              <div
                onClick={() => {
                  removeImage(file.name);
                }}
                className="h-6 w-6 bg-red-400 flex items-center cursor-pointer justify-center rounded-sm"
              >
                <MdDelete className="mdi mdi-trash-can text-white text-[14px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
