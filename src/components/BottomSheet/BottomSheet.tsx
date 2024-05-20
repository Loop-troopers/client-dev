import * as S from "./styles/BottomSheet.style";
import Header from "./Header";

// @ts-expect-error framer motion elements
const BottomSheet = ({ onDragEnd, controls, children }) => {
  return (
    <S.Wrapper
      drag="y"
      onDragEnd={onDragEnd}
      initial="hidden"
      animate={controls}
      transition={{
        type: "spring",
        damping: 40,
        stiffness: 400,
      }}
      variants={{
        visible: { y: 0 },
        hidden: { y: "65%" },
      }}
      dragConstraints={{ top: 10 }}
      dragElastic={0.2}
    >
      <Header />
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.Wrapper>
  );
};

export default BottomSheet;
