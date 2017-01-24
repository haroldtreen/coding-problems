def num_steps(steps_left)
	return 1 if steps_left == 1 
	return 1 + num_steps(steps_left - 1) if steps_left == 2
	return num_steps(steps_left - 2) + num_steps(steps_left - 1)
end