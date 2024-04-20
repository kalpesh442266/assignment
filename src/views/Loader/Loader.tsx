import style from "./Loader.module.scss";

type Props = {
  coverPage: Boolean;
}

const Loader = ({ coverPage }: Props) => {
  return (
    <div className={coverPage ? style.coverPage : style.coverRow}></div>
  )
}
export default Loader