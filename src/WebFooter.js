import React from "react";

const groupMembers = ['Thanh Tùng', 'Minh Lâm', 'Phúc Lâm', 'Minh Nhật', 'Quang Nam'];
    function displayMemberNames(members) {
      const memberList = document.getElementById('memberList');
      
      members.forEach(member => {
        const listItem = document.createElement('li');
        listItem.textContent = member;
        memberList.appendChild(listItem);
      });
    }

    displayMemberNames(groupMembers);

    export default groupMembers;