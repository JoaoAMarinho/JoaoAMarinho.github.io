import { type JSX, Show, createSignal } from "solid-js";

type Props = {
  children: JSX.Element;
  message: string;
};

function Tooltip(props: Props) {
  const [isVisible, setIsVisible] = createSignal(false);

  return (
    <div class="relative inline-block"
      onMouseEnter={() => {
        setIsVisible(true);
      }
      }
      onMouseLeave={() => {
        setIsVisible(false);
      }}
    >
      <div
      >
        {props.children}
      </div>

      <Show when={isVisible()}>
        <div class="absolute z-[100] top-full left-1/2 -translate-x-1/2 mt-2 w-auto max-h-[70px] p-2 bg-black text-white text-center rounded-md shadow-custom shadow-primary-500 border border-primary-500 whitespace-normal">
          <p class="w-max">{props.message}</p>
        </div>
      </Show>
    </div>
  );
}

export default Tooltip;