import React, { useRef, useState } from "react";
import Wrapper from "../../Layouts/Wrapper";
import OverviewGraph from "../../assets/dashboard-graph.png";
import MaterialTable, { MTableToolbar } from "material-table";
import BusyOverlay from "../../Components/BusyOverlay";
import MenuIcon from "../../assets/menu.svg";
import { Chip, Menu, MenuItem } from "@mui/material";
import ButtonComponent from "../../Components/button";
import TableIcons from "../../Components/TableIcons";
import EmployeeDialogShell from "../../Components/employee-dialog";

const options = ["Edit", "Delete"];

const EmployeesOrderPage = () => {
  const [loading, setLoading] = useState(false);
  const [openEmployee, setOpenEmployee] = useState(false);
  const tableRef = useRef();
  const [anchorEl, setAnchorEl] = useState(null);
  const ITEM_HEIGHT = 48;
  const open = Boolean(anchorEl);

  const onActionClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onMenuItemClick = async (option) => {
    switch (option) {
      default:
        break;
    }
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <EmployeeDialogShell open={openEmployee} setOpen={setOpenEmployee} />
      <Wrapper>
        <div className="px-20">
          <BusyOverlay loading={loading} text="" />

          <MaterialTable
            title="Employees"
            icons={TableIcons}
            tableRef={tableRef}
            data={[
              {
                staffId: 122,
                name: "adun sjjs",
                gender: "gender",
              },
            ]}
            columns={[
              {
                title: "S/N",
                field: "s/n",
                render: (data) => <div className="trackingId">1</div>,
              },

              {
                title: "Employee",
                field: "employee",
                render: (data) => <div>adunola odettola</div>,
              },
              {
                title: "Date/Time",
                field: "date/time",
                render: (data) => <div>female</div>,
              },
            ]}
            options={{
              pageSize: 10,
              sorting: false,
              filtering: false,
              debounceInterval: 500,
              actionsColumnIndex: -1,
            }}
            actions={[
              {
                tooltip: "Select More Actions For This Employee",
                icon: MenuIcon,
                onClick: onActionClick,
                position: "row",
              },
              {
                tooltip: "Select More Actions For This Employee",
                icon: MenuIcon,
                onClick: onActionClick,
                position: "toolbarOnSelect",
              },
            ]}
            onRowClick={(event, rowData, togglePanel) => togglePanel?.()}
            components={{
              Toolbar: (props) => (
                <div>
                  <MTableToolbar {...props} />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      flexWrap: "wrap",
                      alignItems: "flex-end",
                      padding: "20px",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenEmployee(true)}
                      className={`text-lg font-medium flex justify-center items-center rounded-md px-12 py-3  border h-53 bg-orange-400 text-white border-orange-400 w-auto
      `}
                      disabled={false}
                    >
                      Add Employee
                    </button>
                  </div>
                </div>
              ),
            }}
          />

          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  onMenuItemClick(option);
                }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Wrapper>
    </div>
  );
};

export default EmployeesOrderPage;
