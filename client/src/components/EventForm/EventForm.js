import React from "react";
import "./EventForm.css";

class EventForm extends React.Component {
    state = {
        name: "",
        category: "",
        capacity: "",
        date: "",
        time: "",
        city: "",
        state: "",
        zipCode: "",
        description: "",
        selectedFile: null,
        fileBrowserDisplayVal: "Select a thumbnail... (optional)"
    };

    componentDidMount = () => {};

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
            this.state.date &&
            this.state.time &&
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

            newEvent.append("date", this.state.date);
            newEvent.append("time", this.state.time);

            newEvent.append("city", this.state.city);
            newEvent.append("state", this.state.state);
            newEvent.append("zipCode", this.state.zipCode);

            newEvent.append("description", this.state.description);
            newEvent.append("photo", this.state.selectedFile);

            console.log(this.state.name);
            console.log(this.state.description);
            console.log(this.state.date);
            console.log(this.state.time);
            // API Call to create an event
            // API.createEvent(newEvent)
            //     .then(res => {
            //         console.log(res.data);
            //     })
            //     .catch(err => console.log(err));
        } else alert(`WARNING!\nPlease fill out the form!`);
    };

    render() {
        return (
            <form className="p-2">
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
                </div>
                <div className="form-row mb-3">
                    <div className="col-md-7">
                        <select
                            className="form-control"
                            name="category"
                            value={this.state.category}
                            onChange={this.inputChangeHandler}>
                            <option>- Category -</option>
                            <option>Sports</option>
                            <option>Meetup</option>
                            <option>Boot camp</option>
                            <option>Summit</option>
                            <option>Rally</option>
                        </select>
                    </div>
                    <div className="col-md-1" />
                    <div className="col-md-4">
                        <select
                            className="form-control"
                            name="capacity"
                            value={this.state.capacity}
                            onChange={this.inputChangeHandler}>
                            <option>- Capacity -</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="col-md-7">
                        <input
                            type="date"
                            className="form-control"
                            name="date"
                            value={this.state.date}
                            onChange={this.inputChangeHandler}
                        />
                    </div>
                    <div className="col-md-1" />
                    <div className="col-md-4">
                        <input
                            type="time"
                            className="form-control"
                            name="time"
                            value={this.state.time}
                            onChange={this.inputChangeHandler}
                        />
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="col-md-7">
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
                    <div className="col-md">
                        <button
                            className="btn btn-lg"
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
