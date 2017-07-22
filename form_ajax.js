$(function(){
 	$(document).on('submit', '.form_ajax', function(){
		var url = $(this).attr('action');
        var type = $(this).attr('method');
        var data = $(this).serialize();
        var alert = $(this).attr('data-alert');
        var destiny = $(this).attr('data-destiny');
        var destinyType =  $(this).attr('data-destiny-type');
       	$.ajax({
            url: url,
            type: type,
            data: data,
            success: function(res){
            	if(alert == 'true')
                	alert(res);
                if(res)
                	if(destiny)
                		destiny.destinyType(res);
            },
            error: function(){
                alert('Ошибка, запрос некорректен.');
            }
        });
        return false;
    });
});