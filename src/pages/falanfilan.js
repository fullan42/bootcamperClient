const falanfilan = () => {
    const imagePath = "";

    return (
        <div
            className="h-100 p-10" // Set a fixed height for the container, you can adjust the value as needed
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1594729095022-e2f6d2eece9c?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex', // Add this line to make it a flex container
            }}
        >
            <div className="w-full flex justify-between">
                {/* Your existing image components */}
                <img
                    className="w-1/3 h-full p-4 object-cover"
                    src="https://images.squarespace-cdn.com/content/v1/5af35198266c07d9fd3ac4ff/6aae5877-7393-421a-b72d-e1d121190e26/porsche_914_6_GT_ClassicCars_Andorra"
                    loading="lazy"
                />
                <img
                    className="w-1/3 h-full  p-4 object-cover"
                    src={"https://img.lovepik.com/free_png/33/58/56/65g58PIC6b4N35zpB9n8h_PIC2018.png_860.png"}
                    loading="lazy"
                />
                <img
                    className="w-1/3 h-full p-4 object-cover"
                    src="https://images.squarespace-cdn.com/content/v1/5af35198266c07d9fd3ac4ff/6aae5877-7393-421a-b72d-e1d121190e26/porsche_914_6_GT_ClassicCars_Andorra"
                    loading="lazy"
                />

            </div>
        </div>
    );
};

export default falanfilan;
