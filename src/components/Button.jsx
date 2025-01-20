const Button = ({
  text,
  width,
  bg,
  height,
  textSize,
  endIcon,
  weight,
  radius,
  border,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`px-4 py-2 text-center font-geist transition-all duration-500 ${
        radius ? radius : "rounded-full"
      } ${weight ? weight : "font-semibold"} ${
        textSize ? textSize : "text-sm md:text-base"
      } ${bg ? bg : "bg-accent text-primaryLight hover:bg-primary"} ${
        width ? width : "w-full sm:w-auto"
      } ${height ? height : "h-12"} ${
        border ? border : "border border-transparent"
      }`}
    >
      <span className={`${endIcon && "flex items-center gap-2"}`}>
        {text}
        {endIcon && endIcon}
      </span>
    </button>
  );
};

export default Button;
