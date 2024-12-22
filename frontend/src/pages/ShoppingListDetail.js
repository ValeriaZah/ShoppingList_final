import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ShoppingListDetail.css";
import { Pie } from "react-chartjs-2";
import {
  getShoppingList,
  deleteShoppingList,
  addNewItems,
  deleteItem,
  resolveItem,
  inviteMember,
} from "../utils/api";
import ItemField from "../components/ItemField";
import ShoppingItem from "../components/ShoppingItem";
import AddMemberField from "../components/AddMemberField";
import { useTranslation } from "react-i18next";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ShoppingListDetail = () => {
  const { t } = useTranslation(); 
  const { listId } = useParams();
  const [shoppingList, setShoppingList] = useState("");
  const [error, setError] = useState("");
  const [deleted, setDeleted] = useState(false);
  const [openItemForm, setOpenItemForm] = useState(false);
  const [openMembersForm, setOpenMembersForm] = useState(false);
  const [items, setItems] = useState([{ name: "", date: "" }]);
  const [members, setMembers] = useState([""]);

  const fetchList = async () => {
    try {
      const response = await getShoppingList(listId);
      setShoppingList(response[0]);
    } catch (err) {
      setError(t("errorFetchingList"));
    }
  };

  useEffect(() => {
    fetchList();
  }, [listId]);

  const deleteList = async () => {
    try {
      await deleteShoppingList(listId);
      setDeleted(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitItems = async (e) => {
    e.preventDefault();
    try {
      items
        .filter((e) => e !== -1)
        .forEach(async (item) => {
          await addNewItems(listId, item);
          fetchList();
        });
    } catch (err) {
      setError(t("errorCreatingItems"));
    }
    setOpenItemForm(false);
  };

  const handleSubmitMembers = async (e) => {
    e.preventDefault();
    try {
      members
        .filter((e) => e !== -1)
        .forEach(async (member) => {
          await inviteMember(listId, member);
        });
    } catch (err) {
      setError(t("errorInvitingMembers"));
    }
    setOpenMembersForm(false);
  };

  if (error) return <p className="error">{error}</p>;
  if (deleted) return <p>{t("listDeleted")}</p>;
  if (!shoppingList) return <p>{t("loading")}</p>;

  const solvedItems = shoppingList.items.filter((item) => item.resolved).length;
  const unsolvedItems = shoppingList.items.length - solvedItems;

  const chartData = {
    labels: [t("solvedItems"), t("unsolvedItems")],
    datasets: [
      {
        data: [solvedItems, unsolvedItems],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };


  return (
    <div className="shopping-list-detail">
      <h1>{t("shoppingListTitle")}: {shoppingList.title}</h1>
       <Pie data={chartData} />
      <ul>
        {shoppingList.items.map((item) => (
          <ShoppingItem
            item={item}
            key={item._id}
            onToggle={(e) => resolveItem(listId, e).then(fetchList)}
            onDelete={(e) => deleteItem(listId, e).then(fetchList)}
          />
        ))}
      </ul>
      <button onClick={deleteList}>{t("deleteList")}</button>
      <button onClick={() => setOpenItemForm(true)}>{t("addNewItem")}</button>
      <button onClick={() => setOpenMembersForm(true)}>{t("inviteMembers")}</button>
      {openItemForm && (
        <form onSubmit={handleSubmitItems}>
          <h2>
            {t("addItemHeader")}{" "}
            <button type="button" onClick={() => setItems([...items, { name: "", date: "" }])}>
              +
            </button>
          </h2>
          {items.map((val, index) => val !== -1 && (
            <ItemField
              key={index}
              remove={(e) => setItems(items.map((v, i) => (i === index ? -1 : v)))}
              id={index}
              update={(e) => {
                const [field, id] = e.target.id.split("#");
                setItems(items.map((item, i) =>
                  i === +id ? { ...item, [field]: e.target.value } : item
                ));
              }}
            />
          ))}
          <button type="submit">{t("updateButton")}</button>
          <button type="button" onClick={() => setOpenItemForm(false)}>
            {t("cancelButton")}
          </button>
        </form>
      )}
      {openMembersForm && (
        <form onSubmit={handleSubmitMembers}>
          <h2>
            {t("addMemberHeader")}{" "}
            <button type="button" onClick={() => setMembers([...members, ""])}>+</button>
          </h2>
          {members.map((val, index) => val !== -1 && (
            <AddMemberField
              key={index}
              remove={(e) => setMembers(members.map((v, i) => (i === index ? -1 : v)))}
              id={index}
              update={(e) => {
                const id = +e.target.id;
                setMembers(members.map((member, i) =>
                  i === id ? e.target.value : member
                ));
              }}
            />
          ))}
          <button type="submit">{t("updateButton")}</button>
          <button type="button" onClick={() => setOpenMembersForm(false)}>
            {t("cancelButton")}
          </button>
        </form>
      )}
    </div>
  );
};

export default ShoppingListDetail;