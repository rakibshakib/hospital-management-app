import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const UpdateService = ({
    open,
    handleClose,
    item,
    setUpdateService,
    updateService,
    updateServiceHandeler,
}) => {
    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const update = { ...updateService };
        update[field] = value;
        setUpdateService(update);
        console.log(updateService);
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="card">
                        <form action="" onSubmit={updateServiceHandeler}>
                            <TextField
                                defaultValue={item?.name}
                                name="name"
                                onChange={handleBlur}
                                sx={{ width: '75%' }}
                                label="Your Name"
                                variant="standard"
                            />
                            <TextField
                                defaultValue={item?.description}
                                name="description"
                                onChange={handleBlur}
                                sx={{ width: '75%' }}
                                label="Your Name"
                                variant="standard"
                            />
                            <TextField
                                defaultValue={item?.available_day}
                                name="available_day"
                                onChange={handleBlur}
                                sx={{ width: '75%' }}
                                label="Your Name"
                                variant="standard"
                            />
                            <button
                                type="submit"
                                className="block my-5 bg-yellow-500 py-1 px-2 rounded-md font-bold"
                            >
                                Update
                            </button>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default UpdateService;
