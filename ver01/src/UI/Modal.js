import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const dummy_text = [
  {
    title: "자기소개",
    title2: "Introduce",
    desc: "우연한 기회에 <객체지향의 사실과 오해>라는 책을 읽게 되었습니다. 이 책을 읽기 전까지 저에게 객체지향이랑 단순히 객체를 생성하고 클래스를 나누어서 작업하기 편하게 하는 정도의 느낌만 있었습니다. 하지만 이 책이 객체지향의 본질을 알려주었고, 이 과정에서 저는 신선한 충격을 받았습니다. 예를 들어 자바 기본 문법에서 인터페이스에 대해 공부를 하긴 했지만, 도대체 이게 왜 필요한 건지 이해를 하지 못하였는데, 이 책에서 세상을 은유하고 있는 객체지향 세계에서 역할(인터페이스)과 구현(구현체)을 나눠서 생각해야 하고, 클라이언트는 역할만을 아는 것을 지향해야 한다는 점에서 인터페이스에 역할과 중요성을 이해하게 되어서 너무 신선했습니다. 이렇게 객체지향의 매력을 느끼고 자연스럽게 자바, 스프링등의 웹 기술을 접하게 되면서 계속해서 새로운 것을 알아간다는 것에 즐거움을 느꼈습니다. 또한, 이러한 기술들의 세상에서 일하게 되면 좋겠다는 생각을 느꼈고 진지한 목표가 되었습니다.",
  },
  {
    title: "장단점",
    title2: "Pros and Cons",
    desc: "제 장점은 어떤 일에 흥미가 생기면 그 일에 대하여 끝까지 파고드는 점입니다. 앞서 언급했듯이 저는 프로그래밍 입문을 게임 모드로 시작하였습니다. 모드를 만들기 위해 한국 커뮤니티, 유튜브에서 관련된 정보를 거의 모두 찾아봤습니다. 그래도 안 나오거나 모르는 내용이 있었을 때는 외국 커뮤니티, 유튜브등을 참고했고, 그래도 부족하면 외국 사이트에 직접 질문글을 올려서 어떻게든 해결했습니다. 이러한 점은 자신 있게 장점이라고 말할 수 있습니다.",
  },
  {
    title: "목표 및 태도",
    title2: "Goals and Attitudes",
    desc: "사실 경력에도 적혀져 있지만, 저에게 사회생활 경험은 편의점 업무밖에 없었습니다. 하지만 이 편의점 업무를 하는 1년간 저는 정말 많은 것을 배웠습니다. 어떻게 보면 간단해 보이는 편의점 업무에도 다양한 규칙과 흐름이 존재하였고, 이를 배워가는 과정이 매우 의미 있는 시간이었다고 생각합니다. 이와 같이 입사 후에 어떠한 역할을 수행하던 그 과정에서 많은 것을 배우고 싶습니다. 이를 위해 항상 열려있는 자세로 새로운 것을 받아드릴 준비를 하고있고, 그것을 내 것으로 만들기 위한 노력을 하겠습니다.f",
  },
];

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  const [index, setIndex] = useState(0);
  const { title, title2, desc } = dummy_text[index];

  const indexPlusHandler = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  const indexMinusHandler = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const checkIndex = (num) => {
    if (num > dummy_text.length - 1) {
      return 0;
    }
    if (num < 0) {
      return dummy_text.length - 1;
    }
    return num;
  };

  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <h3>{title2}</h3>
        <p>{desc}</p>
      </div>
      <div className={styles["button-container"]}>
        <button className={styles["prev-btn"]} onClick={indexMinusHandler}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className={styles["next-btn"]} onClick={indexPlusHandler}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Modal;
