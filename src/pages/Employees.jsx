import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Toolbar,
  Inject,
  Search,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  ExcelExport,
  PdfExport,
} from "@syncfusion/ej2-react-grids";

import {
  employeesData,
  contextMenuItems,
  employeesGrid,
  ordersData,
  ordersGrid,
} from "../data/dummy";
import { Header } from "../components";
import employees from "./Employees";

const Employees = () => {
  return (
    <div className={"m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl"}>
      <Header category={"Page"} title={"Employees"} />
      <GridComponent
        width={"auto"}
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;