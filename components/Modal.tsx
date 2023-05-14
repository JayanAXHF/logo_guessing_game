"use client";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { useAppContext } from "@/context/context";

export const CorrectAnswer = (props: any) => {
  const {
    correctModalOpen: open,
    setCorrectModalOpen: setOpen,
    setSoftTrigger,
  } = useAppContext();

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-zinc-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4 grid justify-center">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h2"
                        className="text-3xl font-semibold leading-6 text-gray-100 text-center"
                      >
                        Correct!
                      </Dialog.Title>
                    </div>
                  </div>
                </div>
                <div className="bg-zinc-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 grid justify-center">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                    onClick={() => {
                      setSoftTrigger((prevState: boolean) => {
                        return !prevState;
                      });
                      setOpen(false);
                    }}
                  >
                    Continue Playing
                  </button>
                  <Link
                    href="/"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-gray-3    text-gray-300 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-zinc-700 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Go to Home
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

interface Props {
  correctAnswer: string;
}

export const IncorrectAnswer = (props: Props) => {
  const {
    incorrectModalOpen: open,
    setIncorrectModalOpen: setOpen,
    setSoftTrigger,
  } = useAppContext();

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-zinc-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4 grid justify-center justify-items-center grid-flow-row">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
                      <Dialog.Title
                        as="h2"
                        className="text-3xl font-semibold leading-6 text-gray-100 text-center"
                      >
                        Wrong!
                      </Dialog.Title>
                    </div>
                    <br />
                  </div>
                  <p className="mt-3 text-gray-200">
                    You got it wrong, unfortunately. The correct answer was{" "}
                    {props.correctAnswer}.
                  </p>
                </div>
                <div className="bg-zinc-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 grid justify-center">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => {
                      setSoftTrigger((prevState: boolean) => {
                        return !prevState;
                      });
                      setOpen(false);
                    }}
                  >
                    Continue Playing
                  </button>
                  <Link
                    href="/"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-gray-3    text-gray-300 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-zinc-700 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Go to Home
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
