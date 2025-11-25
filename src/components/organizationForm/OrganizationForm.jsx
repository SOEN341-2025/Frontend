import React, {useState} from "react";
import styles from "./OrganizationFrom.module.css"
import handleCloseClick from "../../pages/OrganizationsList/OrganizationsList"

export default function OrganizationForm() {

    const[organizationForm, setOrganizationForm] = useState({
        name: "",
        icon: null,
        description: "",
    });

    // Handles input change for all fields
    const editOrganizationForm = (e) => {
        const { name, value } = e.target;
        setOrganizationForm({ ...organizationForm, [name]: value });
    };

    //Hander for file input
    const handleIconChange = (e) => {
        const file = e.target.files[0];
        setEventForm({ ...organizationForm, icon: file});
    }

    return(
        <>
            <form className={styles.organizationContainer}>
                {/*name, icon (file), description, */}
                <h3 style={{ textAlign: "center" }}>Add Organization Details</h3>
                <br/>

                <p>Name:</p>
                <p>
                    <input
                        className={styles.fieldStyle}
                        type="text"
                        name="name"
                        value={organizationForm.name}
                        onChange={editOrganizationForm}
                        placeholder="Concordia SAE"
                    />
                </p>

                <p>Icon:</p>
                <p>
                    <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleIconChange}
                    />
                </p>
                

                <p>Description: </p>

                <p>
                    <textarea
                        className={styles.fieldStyle}
                        name="description"
                        value={organizationForm.description}
                        onChange={editOrganizationForm}
                        placeholder="Concordia SAE, located in Montreal, Quebec, is a student-run chapter of SAE International at Concordia University. A world-renowned engineering organization, SAE International hosts the Collegiate Design Series competitions for students. These yearly international competitions allow students to apply classroom knowledge to real-life situations, challenging students to design, manufacture, test, and compete with a vehicle in a dynamic environment."
                    />
                </p>

                <p className={styles.buttonCenterAlign}>
                    <button
                        type="submit"
                        className={styles.orgSubmit}
                    >
                        Submit
                    </button>
                </p>

                <p className={styles.buttonCenterAlign}>
                    <button
                        onClick={handleCloseClick}
                        type="Close"
                        className={styles.orgClose}
                    >
                        Close
                    </button>
                </p>
        
            </form>
        </>
    )

}