let sample_child = $("#samplePage");
sample_child.children(".test1").css("border", "4px solid #f00");
sample_child.find(".test1").css("border", "4px solid #f00");

// find는 자식의 전체에서 찾음 
// children은 바로 하위자식에서만 찾음