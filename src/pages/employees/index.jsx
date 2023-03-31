import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../../Layouts/Wrapper";
import MaterialTable, { MTableToolbar } from "material-table";
import BusyOverlay from "../../Components/BusyOverlay";
import TableIcons from "../../Components/TableIcons";
import EmployeeDialogShell from "../../Components/employee-dialog";
import { useQuery } from "react-query";
import { getEmployeesQuery } from "../../operations/mutation.def";

const EmployeesPage = () => {
  const [loading, setLoading] = useState(false);
  const [openEmployee, setOpenEmployee] = useState(false);
  const tableRef = useRef();
  const [anchorEl, setAnchorEl] = useState(null);
  const [employeeData, setEmployeeData] = useState([]);

  const { isLoading, error, data, refetch } = useQuery("users", () => {
    return getEmployeesQuery(0);
  });

  useEffect(() => {
    if (data) {
      setEmployeeData(data);
    }
  }, [data, employeeData]);
  const pageLoader = loading || isLoading;

  return (
    <>
      <EmployeeDialogShell
        refetch={refetch}
        open={openEmployee}
        setOpen={setOpenEmployee}
      />
      <div>
        <Wrapper>
          <div className="px-20">
            <BusyOverlay loading={pageLoader} text="" />

            <MaterialTable
              title="Employees"
              icons={TableIcons}
              tableRef={tableRef}
              data={employeeData}
              columns={[
                {
                  title: "Staff Id",
                  field: "staffId",
                  render: (data) => (
                    <div className="trackingId">{data.staffId}</div>
                  ),
                },

                {
                  title: "Name",
                  field: "name",
                  render: (data) => <div>{data.name}</div>,
                },
                {
                  title: "Gender",
                  field: "gender",
                  render: (data) => <div>{data.gender}</div>,
                },
                {
                  title: "Department",
                  field: "department",
                  render: (data) => (
                    <div className="amount">{data.department}</div>
                  ),
                },
              ]}
              options={{
                pageSize: 10,
                sorting: false,
                filtering: false,
                debounceInterval: 500,
                actionsColumnIndex: -1,
              }}
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
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default EmployeesPage;
