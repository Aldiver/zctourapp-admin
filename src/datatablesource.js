export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  // {
  //   field: "user",
  //   headerName: "User",
  //   width: 230,
  //   // renderCell: (params) => {
  //   //   return (
  //   //     <div className="cellWithImg">
  //   //       <img className="cellImg" src={params.row.img} alt="avatar" />
  //   //       {params.row.username}
  //   //     </div>
  //   //   );
  //   // },
  // },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "role",
    headerName: "Role",
    width: 100,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];

export const destinationColumns = [
  { field: "id", headerName: "ID", width: 250 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "address", headerName: "Address", width: 250 },
  {
    field: "aveRating",
    headerName: "Average Rating",
    width: 150,
    type: "number",
  },
  {
    field: "coverImage",
    headerName: "Cover Image",
    width: 150,
    renderCell: (params) => (
      <img
        src={params.row.coverImage}
        alt="cover"
        style={{ width: "100%", height: "auto" }}
      />
    ),
  },
  { field: "description", headerName: "Description", width: 400 },
  {
    field: "isFoodServiceEstablishment",
    headerName: "Food Service?",
    width: 150,
    type: "boolean",
  },
  {
    field: "locationCoords",
    headerName: "Location",
    width: 250,
    renderCell: (params) => {
      const coords = params.row.locationCoords;
      return coords
        ? `${coords.latitude}, ${coords.longitude}`
        : "No coordinates";
    },
  }, // This will now display lat/long
  { field: "rating", headerName: "Rating", width: 100, type: "number" },
  { field: "tags", headerName: "Tags", width: 200 },
];

export const menuColumns = [
  { field: "id", headerName: "ID", width: 250 },
  { field: "destinationId", headerName: "Destination ID", width: 250 },
  {
    field: "menuItem",
    headerName: "Menu Items",
    width: 400,
    renderCell: (params) => (
      <div>
        {Array.isArray(params.row.menuItem)
          ? params.row.menuItem.map((item, index) => (
              <div key={index}>
                {item.name} - ${item.price}
              </div>
            ))
          : "No menu items"}
      </div>
    ),
  },
];
