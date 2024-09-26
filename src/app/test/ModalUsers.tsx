"use client";

import { CopyButton } from "@/components/ui/CopyButton";
import ModalDetailText from "@/components/ui/DetailItem";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { RiCloseLine } from "@remixicon/react";
import { type Row } from "@tanstack/react-table";
import { useState } from "react";
import { type QuestionsDataProps } from "./questions-columns";

const ModalDetails = ({
  row,
  children,
}: {
  row: Row<QuestionsDataProps>;
  children: React.ReactNode;
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="overflow-visible p-0 sm:max-w-fit">
        <div className="absolute right-0 top-0 pr-3 pt-3">
          <button
            type="button"
            className="p-2"
            onClick={() => setModalOpen(false)}
            aria-label="Close"
          >
            <RiCloseLine className="size-5 shrink-0" aria-hidden={true} />
          </button>
        </div>
        <div className="border-b px-6 py-4">
          <h3 className="font-medium capitalize">Test Details</h3>
        </div>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="flex flex-col justify-between md:border-r">
            <div className="border-t p-6 md:border-none">
              <h4 className="text-md font-medium">Test Information</h4>
              <ModalDetailText label="Title: " content={row.original.Title} />
              <ModalDetailText
                label="Description: "
                content={row.original.Description}
              />
              <div className="flex flex-row items-center">
                <ModalDetailText label="ID: " content={row.original.ID} />
                <CopyButton content={row.original.ID} />
              </div>
              <ModalDetailText
                label="Input Format: "
                content={row.original.InputFormat}
              />
              <ModalDetailText
                label="Output Format: "
                content={row.original.OutputFormat}
              />
              <ModalDetailText
                label="Points: "
                content={row.original.Points?.toString()}
              />
              <ModalDetailText
                label="Round: "
                content={row.original.Round?.toString()}
              />
              <ModalDetailText
                label="Constraints: "
                content={row.original.Constraints}
              />

              <h4 className="text-md mt-4 font-medium">Metadata</h4>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalDetails;