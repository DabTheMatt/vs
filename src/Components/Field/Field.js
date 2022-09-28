import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function Field(props) {

    return (
      <div className={`field ${props.fieldType}`}>
      </div>
    );
  }