import React, { useState, useEffect} from 'react';
  function ExampleComponent() {
  //khai bao một biên state count va ham cập nhật 'setCount'
  const [count, setCount] = useState(0);
  // useEffect được sử dụng để thực hiện một tác vụ phụ (side effect)
  useEffect(() => {
  // Cập nhật tiêu đề của trang web với giá trị mới của count
  document.title = 'Bạn đã bấm ${count} lần';
  }, [count]); // Chỉ chạy lại useEffect khi count thay đổi
  return (
  <div>
  <p>Bạn đã bấm {count} lần</p>
  <button onClick={() => setCount(count + 1)}>
  Bấm để tăng
  </button>
  </div> 
  );
}
  export default ExampleComponent;