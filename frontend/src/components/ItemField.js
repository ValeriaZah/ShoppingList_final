import { t } from "i18next";

const ItemField = (props) => {
  return (
    <div>
      <label>
        {t("Name:")}<input id={`name#${props.id}`} type="text" onChange={props.update} required></input>
      </label>
      <label>
        {t("date")}<input id={`date#${props.id}`} type="date" onChange={props.update} required></input>
      </label>
      <button type="button" onClick={props.remove} id={props.id}>
        -
      </button>
    </div>
  );
};

export default ItemField;
