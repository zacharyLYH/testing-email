"use client";

const EmailButton = () => {
    async function onSubmit() {
        const submitter = async () => {
            try {
                const response = await fetch("/api/sendEmail", {
                    method: "POST",
                });
                return response.json();
            } catch (error) {
                return "error";
            }
        };
        const result = await submitter();
        const alertMessage = result === "error" ? "An error occurred" : result;
        alert(alertMessage.message);
    }

    return (
        <button onClick={onSubmit} type="submit">
            Submit
        </button>
    );
};

export default EmailButton;
