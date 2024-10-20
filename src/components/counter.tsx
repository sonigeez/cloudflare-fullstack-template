import { useAtom } from "jotai";
import { countAtom } from "../lib/store";
import { AddButton } from "./add_button";
import { DecrementButton } from "./decrease_button";

const Counter = () => {
	const [count, _] = useAtom(countAtom);

	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="flex flex-col items-center space-y-4">
				<div className="flex space-x-4">
					<AddButton />
					<DecrementButton />
				</div>
				<div className="text-center">
					<p>Count: {count}</p>
				</div>
			</div>
		</div>
	);
};

export default Counter;
