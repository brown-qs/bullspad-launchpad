import Icon, { TIconProps } from "../Icon"

const DiscordIcon = (props: TIconProps) => {
  return (
    <Icon iconName="discord-icon" { ...props }>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1165_445"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="40"
          height="40"
        >
          <rect
            width="40"
            height="40"
            fill="#D9D9D9"
          />
        </mask>
        <g mask="url(#mask0_1165_445)">
          {/* eslint-disable-next-line max-len */}
          <path d="M33.8837 7.01296C31.2605 5.77621 28.4853 4.89745 25.6315 4.3999C25.2761 5.04746 24.8608 5.91842 24.5744 6.61132C21.4975 6.14514 18.4489 6.14514 15.4286 6.61132C15.1423 5.91858 14.7176 5.04746 14.3589 4.3999C11.5023 4.89768 8.72477 5.77868 6.1003 7.01941C0.877801 14.9716 -0.537979 22.7261 0.169833 30.3708C3.63374 32.9772 6.99061 34.5606 10.2909 35.5968C11.1111 34.4602 11.8362 33.2569 12.4586 31.9994C11.2736 31.5448 10.1313 30.9846 9.04514 30.3255C9.33097 30.112 9.61007 29.8895 9.88202 29.6584C16.4636 32.7603 23.6148 32.7603 30.1179 29.6584C30.3911 29.888 30.6701 30.1104 30.9547 30.3255C29.8668 30.9863 28.7223 31.5477 27.535 32.0027C28.1609 33.2654 28.8847 34.4698 29.7026 35.5999C33.0061 34.5639 36.3661 32.9805 39.83 30.3708C40.6606 21.5087 38.4112 13.8253 33.8837 7.0128V7.01296ZM13.3553 25.6694C11.3795 25.6694 9.7592 23.8108 9.7592 21.5476C9.7592 19.2844 11.345 17.4227 13.3553 17.4227C15.3658 17.4227 16.9859 19.2811 16.9514 21.5476C16.9545 23.8108 15.3658 25.6694 13.3553 25.6694ZM26.6445 25.6694C24.6687 25.6694 23.0486 23.8108 23.0486 21.5476C23.0486 19.2844 24.6342 17.4227 26.6445 17.4227C28.655 17.4227 30.2751 19.2811 30.2406 21.5476C30.2406 23.8108 28.655 25.6694 26.6445 25.6694Z" fill="#5865F2"/>
        </g>
      </svg>
    </Icon>
  )
}

export default DiscordIcon