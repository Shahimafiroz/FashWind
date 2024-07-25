import React from "react";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import { IconButton, TextField } from "@mui/material";
function Search() {
  return (
    <div style={{ height: "auto", padding: "5rem 1rem 4rem" }}>
      <div
        style={{ height: "auto", display: "flex", justifyContent: "center" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            style={{
              width: "700px",
              padding: "5px",
              border: "2px solid #7c0000",
              borderRadius: "5px",
              backgroundColor: "#eddfd0",
              outline: "none",
              fontSize: "20px",
              fontFamily: "Sevillana",
            }}
            placeholder="Search Catalogue"
          />
        </div>
        <div>
          <IconButton>
            <FindInPageIcon sx={{ fontSize: "50px", color: "#1a4941" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Search;
