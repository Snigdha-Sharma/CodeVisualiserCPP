define step_mult
	set $step_mult_max = 5
	set $step_mult_count = 0
	while($step_mult_count<$step_mult_max)
		set $step_mult_count = $step_mult_count + 1
		printf "step #%d\n",$step_mult_count
		step
		info local
	end
end


define qquit
	set confirm off
	quit
end
document qquit
Quit without asking for confirmation
end
