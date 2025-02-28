const ChakraIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill = "white",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48px"
      height="48px"
      viewBox="0 -960 960 960"
      fill={fill}
      stroke="none"
      strokeWidth="15"
      strokeMiterlimit="10"
      style={{ transformOrigin: "center" }}
      {...props}
    >
      <path d="m480-281 59.02-59.02h81.02v-81.02L679-480l-59-59v-81h-81l-59-59-59 59h-81v81l-59 59 58.96 59.02v81.02h80.08L480-281Zm0 181L367.77-212H212v-155.77L99-480l113-112.22V-748h155.77L480-861l112.22 113H748v155.78L861-480 748-367.77V-212H592.22L480-100Zm0-32 102.5-102H726v-142.83L829-480 725.83-583.17V-726H583L480-829 377-726H234.17v142.83L131-480l103 103.17V-234h143l103 102Zm0-348Z" />
    </svg>
  );
};

export default ChakraIcon;
