

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
  },
         {
             "Quest_no": "You: We can guarantee a level of comprehensiveness that no other providers of maritime data can. AiveILS has the greatest level of antenna coverage with supplementary data available from IHS Maritime’s extensive ship and company databases. Our databases have over 200,000 ships and 240,000 related companies. Also, our data are verified by AiveILS experts, who have over 10 years of experience. [Question]: What is the next step you should take?",
             "answers": [
                 {
                     "options": "a.	Ask for the sale",
                     "ans": false
                 },
                 {
                     "options": "b.	Ask questions to assess urgency and priority.",
                     "ans": false
                 },
                 {
                     "options": "c.	Describe AiveILS subscription levels",
                     "ans": true
                 }
             ],
             "correct_feed": "That is correct. Before you can assess the priority, you’ll need to know which level of service the prospect needs. This is a good opportunity to explain the differences among the different service levels."
         },
         {
             "Quest_no": "You: We offer three levels of service that you can select from, depending on your business needs. These levels are Premium, Plus, and AISLive. All service levels provide live ship positions through a terrestrial antenna network, the ability to create a watch list of ships to track, bespoke alert zones, and alerts to itinerary changes. View ship details such as IMO numbers, ship owner, technical manager and commercial operator, position, course, speed, next port of call, and last four port callings. You can filter 197 different ship types that make it easy to track the vessels you want to monitor.In addition to what I’ve just mentioned, Plus offers enhanced port information. You can view comprehensive details of over 14,000 ports and terminals, including a complete description of the port and all of the relevant facilities, pre-arrival and navigation details, berths and cargo, tanker berths, plans, and mooring diagrams. Also, you are provided with a list of ships that are expected in port in the next 24 hours, ships that are currently in port,and ships that have departed from port in the last 24 hours. Alerts can be set up to automatically send an email when a ship arrives at port.Premium offers the greatest value by offering all of the previously mentioned features and satellite coverage that provides greater visibility of deep sea and offshore vessel movements. Which service level interests you the most?Tom: Maybe Plus. It seems to be a better fit for our needs.[Question]: What is the next step you should make?",
             "answers": [
                 {
                     "options": "a.	Ask for the sale",
                     "ans": false
                 },
                 {
                     "options": "b.	Ask questions to assess urgency and priority",
                     "ans": true
                 },
                 {
                     "options": "c.	Secure a meeting",
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
