import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import {
  userColumns,
  destinationColumns,
  menuColumns,
} from "../../datatablesource"; // Adjust import as needed
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const Datatable = ({ collection: collectionName }) => {
  const [data, setData] = useState([]);

  const columns =
    {
      users: userColumns,
      destinations: destinationColumns,
      menus: menuColumns,
    }[collectionName] || userColumns;

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, collectionName),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          // if (collectionName === "destinations" && data.locationCoords) {
          //   data.locationCoords = `${data.locationCoords.latitude}, ${data.locationCoords.longitude}`;
          // }
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, [collectionName]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, collectionName, id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/${collectionName}/test`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New {collectionName.slice(0, -1)}
        <Link to={`/${collectionName}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
