import React from "react";
import "./EventForm.css";
import API from "../../utils/api/API";

class EventForm extends React.Component {
    state = {
        name: "",
        category: "",
        capacity: "",
        isEventFree: "question",
        ticketTier: "",
        cost: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        description: "",
        selectedFile: null,
        fileBrowserDisplayVal: "Select a thumbnail... (optional)",
        ticketRowCounter: 1,
        addMoreRows: [1]
    };

    inputChangeHandler = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    fileSelectionHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            fileBrowserDisplayVal: event.target.files[0].name
        });
    };

    createEventBtnHandler = event => {
        event.preventDefault();

        if (
            this.state.name &&
            this.state.category &&
            this.state.capacity &&
            this.state.startDate &&
            this.state.startTime &&
            this.state.endDate &&
            this.state.endTime &&
            this.state.street &&
            this.state.city &&
            this.state.state &&
            this.state.zipCode &&
            this.state.description &&
            this.state.selectedFile
        ) {
            const newEvent = new FormData();
            newEvent.append("name", this.state.name);
            newEvent.append("category", this.state.category);
            newEvent.append("capacity", this.state.capacity);

            newEvent.append("startDate", this.state.startDate);
            newEvent.append("startTime", this.state.startTime);
            newEvent.append("endDate", this.state.endDate);
            newEvent.append("endTime", this.state.endTime);

            newEvent.append("street", this.state.street);
            newEvent.append("city", this.state.city);
            newEvent.append("state", this.state.state);
            newEvent.append("zipCode", this.state.zipCode);

            newEvent.append("description", this.state.description);
            newEvent.append("photo", this.state.selectedFile);

            newEvent.append("username", localStorage.getItem("username"));

            API.event
                .createEvent(newEvent)
                .then(res => (window.location.pathname = "/events"))
                .catch(err => console.log(err));
        } else alert(`WARNING!\nPlease fill out the form!`);
    };

    addMoreBtnHandler = event => {
        event.preventDefault();

        this.setState({
            ticketRowCounter: this.state.ticketRowCounter + 1
        });

        let tempArr = [];
        for (var i = 0; i <= this.state.ticketRowCounter; i++) tempArr.push(i);

        this.setState({
            addMoreRows: tempArr
        });
    };

    render() {
        return (
            <form className="p-2 text-secondary font-italic">
                <div className="form-row mb-3">
                    <div className="col-md">
                        <input
                            type="text"
                            className="form-control"
                            required
                            placeholder="Event's name"
                            name="name"
                            value={this.state.name}
                            onChange={this.inputChangeHandler}
                        />
                    </div>
                    <div className="col-md-4">
                        <select
                            className="form-control"
                            name="category"
                            value={this.state.category}
                            onChange={this.inputChangeHandler}>
                            <option value="" disabled>
                                Category
                            </option>
                            <option>Meetup</option>
                            <option>Tutoring</option>
                            <option>Sports</option>
                            <option>Boot camp</option>
                            <option>Fundraising</option>
                            <option>Summit</option>
                            <option>Conference</option>
                            <option>Rally</option>
                            <option>Music</option>
                            <option>Wine tasting</option>
                            <option>Culinary arts</option>
                        </select>
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="col">
                        <input
                            type="number"
                            min="2"
                            max="100"
                            placeholder="Capacity"
                            className="form-control"
                            name="capacity"
                            value={this.state.capacity}
                            onChange={this.inputChangeHandler}
                        />
                    </div>
                </div>
                <div className="form-row justify-content-md-between">
                    <div className="col-6 col-md-5">
                        <div className="form-group">
                            <label htmlFor="input-start-date">&nbsp;Starts</label>
                            <input
                                id="input-start-date"
                                type="date"
                                className="form-control"
                                name="startDate"
                                value={this.state.startDate}
                                onChange={this.inputChangeHandler}
                            />
                            <input
                                type="time"
                                className="form-control"
                                name="startTime"
                                value={this.state.startTime}
                                onChange={this.inputChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-5">
                        <div className="form-group">
                            <label htmlFor="input-end-date">&nbsp;Ends</label>
                            <input
                                id="input-end-date"
                                type="date"
                                className="form-control"
                                name="endDate"
                                value={this.state.endDate}
                                onChange={this.inputChangeHandler}
                            />
                            <input
                                type="time"
                                className="form-control"
                                name="endTime"
                                value={this.state.endTime}
                                onChange={this.inputChangeHandler}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-row mb-md-1">
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control"
                            required
                            placeholder="Street"
                            name="street"
                            value={this.state.street}
                            onChange={this.inputChangeHandler}
                        />
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            required
                            placeholder="City"
                            name="city"
                            value={this.state.city}
                            onChange={this.inputChangeHandler}
                        />
                    </div>
                    <div className="col-md-2">
                        <input
                            type="text"
                            className="form-control"
                            required
                            placeholder="State"
                            name="state"
                            value={this.state.state}
                            onChange={this.inputChangeHandler}
                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="text"
                            className="form-control"
                            required
                            placeholder="Zip code"
                            name="zipCode"
                            value={this.state.zipCode}
                            onChange={this.inputChangeHandler}
                        />
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="col-md">
                        <textarea
                            className="form-control"
                            rows="4"
                            required
                            placeholder="Event's description"
                            name="description"
                            value={this.state.description}
                            onChange={this.inputChangeHandler}
                        />
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="col-md">
                        <div className="custom-file">
                            <input
                                type="file"
                                className="custom-file-input"
                                id="validatedCustomFile"
                                required
                                accept="image/*"
                                onChange={this.fileSelectionHandler}
                            />
                            <label
                                className="custom-file-label"
                                htmlFor="validatedCustomFile">
                                {this.state.fileBrowserDisplayVal}
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="col">
                        <button
                            className="btn btn-lg event-form"
                            onClick={this.createEventBtnHandler}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default EventForm;
