import useToast from "@/lib/toast";
import { RiFileCopy2Line } from "@remixicon/react";

const ModalDetailText = ({
  label,
  content,
  copyable,
}: {
  label: string;
  content: string | undefined;
  copyable?: boolean;
}) => {
  const toast = useToast();

  const handleCopy = () => {
    if (content) {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          toast.create("Copied to Clipboard ", "success");
        })
        .catch((error) => {
          toast.create("Error", "success");

          console.log(error);
        });
    }
  };
  return (
    <p className="flex w-fit flex-row items-center gap-1 whitespace-nowrap text-sm">
      <span className="">{label}</span>
      <span>{content}</span>
      {copyable && content && (
        <span>
          <RiFileCopy2Line
            onClick={handleCopy}
            size={16}
            className="hover:cursor-pointer"
          />
        </span>
      )}
    </p>
  );
};

export default ModalDetailText;
