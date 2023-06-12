import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BiChevronDown } from "react-icons/bi";

export default function Example() {
	return (
		<div className="w-25">
			<Menu
				as="div"
				className="relative inline-block"
			>
				<div>
					<Menu.Button className="inline-flex w-full justify-center border rounded border-primary px-2 py-2 text-sm font-medium text-white focus:outline-none">
						ENGLISH
						<BiChevronDown
							className="ml-14 -mr-1 h-5 w-5 text-white"
							aria-hidden="true"
						/>
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded bg-primary shadow ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer">
						<div className="px-1 py-1 ">
							<Menu.Item>
								{({ active }) => (
									<span
										className={`${
											active
												? "bg-white text-primary"
												: "text-white"
										} group flex w-full items-center rounded px-2 py-2 text-sm`}
									>
										ITALIAN
									</span>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<span
										className={`${
											active
												? "bg-white text-primary"
												: "text-white"
										} group flex w-full items-center rounded px-2 py-2 text-sm`}
									>
										RUSSIAN
									</span>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<span
										className={`${
											active
												? "bg-white text-primary"
												: "text-white"
										} group flex w-full items-center rounded px-2 py-2 text-sm`}
									>
										FRENCH
									</span>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}
