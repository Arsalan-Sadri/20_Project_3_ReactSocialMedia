import React from "react";
import "./MoreTicketType.css";

const MoreTicketType = props => (
    <div className="form-row">
        <div className="col-9">
            <input
                type="text"
                placeholder="Ticket's tier, e.g. Student, Early Bird, VIP, ..."
                className="form-control"
                name="ticketTier"
                value={props.ticketTier}
                onChange={props.inputChangeHandler}
            />
        </div>
        <div className="col-3">
            <input
                type="number"
                min="1"
                max="1000"
                placeholder="Cost"
                className="form-control"
                name="cost"
                value={props.cost}
                onChange={props.inputChangeHandler}
            />
        </div>
    </div>
);

export default MoreTicketType;
