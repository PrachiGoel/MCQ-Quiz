

qbsApp.controller('MCQ-QuizController', function($scope, $rootScope) {
	 $scope.questions = [
  {
    "Quest_no": "You: Hi, Tom. Thanks for meeting with me today.Tom: Sure, I’m interested in learning more about how AiveILS can help me.[Question]: What is the next step you should take?",
    "answers": [
      {
        "options": "a. Ask for the sale",
        "ans": false
      },
      {
        "options": "b. Describe the value that AiveILS brings to the customer",
        "ans": false
      },
      {
        "options": "c. Ask a discovery question",
        "ans": true
      }
    ]
  },
  {
    "Quest_no": "You: Certainly, I would be happy to tell you more about AISLive, but first, can you tell me about your workflow? Tom: Some of my primary responsibilities are ensuring a berth for an incoming ship, drawing up documents for customs and harbor services, and organizing the supply, transport, and handling of goods. I also collect freights and cargo, contact shippers and receivers of goods, as well as arrange a number of services that include necessary ship repairs, stevedores, and medical assistance.,You: Where are you finding bottlenecks in your workflow?,Tom: Sometimes ships are delayed due to weather or damage to the ship. This can affect ship arrival times, which can impact the schedule of crew and any necessary services. We currently use Marine Traffic to track vessels. ,You: Online sources may not be 100% reliable. Our dedicated support team provides reliable and verified data with 96% uptime connectivity.,Tom: But why would I pay more for AiveILS when there are other products that can provide me with the same service that are less expensive?,[Question]: How should you respond?,",
    "answers": [
      {
        "options": "a. Ask for the sale",
        "ans": false
      },
      {
        "options": "b. Handle the objection",
        "ans": true
      },
      {
        "options": "c. Describe AiveILS subscription levels",
        "ans": false
      }
    ]
  }
];
 
  $scope.answers ={};
  $scope.ans_count = 0;
  $scope.showResult = function(){
    $scope.ans_count = 0;
    var qLength = $scope.questions.length;
    for(var i=0;i<qLength;i++){
      var answers = $scope.questions[i].answers;
      $scope.questions[i].userAnswerans = false;
      $scope.questions[i].userAnswer = $scope.answers[i];
      for(var j=0;j<answers.length;j++){
        answers[j].selected = "donno";
        if ($scope.questions[i].userAnswer === answers[j].options && answers[j].ans===true){
          $scope.questions[i].userAnswerans = true;
          answers[j].selected = "true";
          $scope.ans_count++;
        }else if($scope.questions[i].userAnswer === answers[j].options && answers[j].ans===false){
          answers[j].selected = "false";
        }
      }
    }
    
    //console.log($scope.answers);
    
  };
});
