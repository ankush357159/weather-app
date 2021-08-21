import { Box, TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	component: {
		padding: 10,
		background: "#44586F",
        display: "flex"
	},
	input: {
		color: "#fff",
		marginRight: 15,
	},
	button: {
		width: 150,
		height: 40,
		background: "#e67e22",
		color: "#fff",
		marginTop: 5,
	},
});
const Form = () => {
	const classes = useStyles();
	return (
		<Box className={classes.component}>
			<TextField
				inputProps={{ className: classes.input }}
				label='City'
				className={classes.input}
			/>

			<TextField
            inputProps={{ className: classes.input }}
            label='Country' />
			<Button variant='contained' className={classes.button}>
				Get Weather
			</Button>
		</Box>
	);
};

export default Form;
