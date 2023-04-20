export function ArrowUndoUpLeft() {
  return (
    <>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Arrow / Arrow_Undo_Up_Left">
          <path
            id="Vector"
            d="M11.6667 21.6667L5 15M5 15L11.6667 8.33334M5 15H26.6667C31.269 15 35 18.731 35 23.3333C35 27.9357 31.269 31.6667 26.6667 31.6667H18.3333"
            stroke="#FF6E40"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </>
  );
}

export function HouseSvg({ active }) {
  return (
    <>
      <svg
        width="68"
        height="68"
        viewBox="0 0 68 68"
        fill={active ? "#FFC13B" : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M56.3333 48.8036V33.0844C56.3333 31.5705 56.332 30.8131 56.1479 30.1086C55.9848 29.4843 55.717 28.8935 55.3546 28.3596C54.9456 27.7572 54.3771 27.2576 53.2377 26.2606L39.6377 14.3606C37.5223 12.5097 36.4646 11.5847 35.2742 11.2326C34.2254 10.9225 33.1074 10.9225 32.0585 11.2326C30.8691 11.5844 29.8129 12.5085 27.7007 14.3567L14.0962 26.2607C12.9568 27.2576 12.3885 27.7572 11.9795 28.3596C11.6171 28.8935 11.3472 29.4843 11.1841 30.1086C11 30.8131 11 31.5705 11 33.0844V48.8036C11 51.4439 11 52.7636 11.4313 53.805C12.0065 55.1935 13.1089 56.298 14.4974 56.8731C15.5388 57.3044 16.8589 57.3045 19.4993 57.3045C22.1396 57.3045 23.4612 57.3044 24.5026 56.8731C25.8911 56.298 26.9932 55.1937 27.5684 53.8052C27.9997 52.7639 28 51.4437 28 48.8034V45.97C28 42.8404 30.5371 40.3034 33.6667 40.3034C36.7963 40.3034 39.3333 42.8404 39.3333 45.97V48.8034C39.3333 51.4437 39.3333 52.7639 39.7647 53.8052C40.3398 55.1937 41.4422 56.298 42.8307 56.8731C43.8721 57.3044 45.1923 57.3045 47.8326 57.3045C50.4729 57.3045 51.7946 57.3044 52.8359 56.8731C54.2244 56.298 55.3266 55.1935 55.9017 53.805C56.333 52.7636 56.3333 51.4439 56.3333 48.8036Z"
          stroke="#FFC13B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
