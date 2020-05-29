$(function(){ 
      function buildHTML(message){
      if ( message.image ) {
        var html =
          `<div class="chat-main__message__list">
            <div class="chat-main__message__list__info">
              <div class="chat-main__message__list__info--name">
                ${message.user_name}
              </div>
              <div class="chat-main__message__list__info--date">
                ${message.created_at}
              </div>
            </div>
            <div class="chat-main__message__lower-message">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
            <img src=${message.image} >
          </div>`
        return html;
      } else {
        var html =
          `<div class="chat-main__message__list">
            <div class="chat-main__message__list__info">
              <div class="chat-main__message__list__info--name">
                ${message.user_name}
              </div>
              <div class="chat-main__message__list__info--date">
                ${message.created_at}
              </div>
            </div>
            <div class="chat-main__message__lower-message">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
          </div>`
        return html;
        };
      }
$('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
      .done(function(data){
        var html = buildHTML(data);
        $('.chat-main__message').append(html);
        $('.new_message')[0].reset();
      })
      .fail(function() {
        alert("メッセージ送信に失敗しました");
      })
      .always(function() {
        $('.btn-submit').prop('disabled', false);
      });
})
});