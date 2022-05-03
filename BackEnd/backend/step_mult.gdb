define step_mult
	set $step_mult_max = 3
	set $step_mult_count = 0
	while($step_mult_count<$step_mult_max)
		set $step_mult_count = $step_mult_count + 1
		printf "step #%d\n",$step_mult_count
		step
		info local
	end
end
