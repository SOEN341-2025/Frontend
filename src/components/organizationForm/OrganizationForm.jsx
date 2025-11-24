import React, {useState} from "react";
import styles from "./OrganizationFrom.module.css"

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
                        placeholder="Fuck You"
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
                        placeholder="Fuck You"
                    />
                </p>

        
            </form>
        </>
    )

}