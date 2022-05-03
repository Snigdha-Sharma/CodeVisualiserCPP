define plist
  set var $n = $arg0->head
  while $n
    printf "%d ", $n->val
    set var $n = $n->next
  end
end