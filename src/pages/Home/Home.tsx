import React from "react";
import "./Home.css"
// import logo from "./css/pictures/logo.png";
import gift from "./img/gifts.png";
import volunteer2 from "./img/volunteer2.png";
import twitter from "./img/twitter.svg";
import insta from "./img/instagram.svg";
import dribble from "./img/dribbble.svg";
import { useNavigate } from "react-router";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";

const Main = () => {

  const navigate = useNavigate();

  const HandleToMissions = () => {
    navigate("/missions");
  }

  const handleToContact = () => {
    navigate("/contact");
  }

  return (
    <div className="main--container">
      <Header />
      {/* Header here because <Footer /> somehow does not stick to the end of the page... */}
      <main>
        <div className="main--intro">
          <div className="main--assist">
            <div className="main--chungtoi">Chúng tôi là Green Env</div>

            <div className="main--mission">Nhiệm vụ của chúng tôi</div>

            <div className="main--la">
              là truyền cảm hứng, thúc đẩy và trao quyền cho các cá nhân tham
              gia vào những phong trào môi trường tại Việt Nam.
            </div>
          </div>

          <button className="main--thamgia" onClick={handleToContact}>Tham gia cùng chúng tôi</button>
        </div>

        <div className="main--challenge">
          <h3 className="main--challenge_header">Thách thức</h3>
          <div className="main--challenge_content">
            Trong bối cảnh đô thị hóa và tình trạng bùng nổ dân số gia tăng thì
            rác thải đã trở thành một vấn đề môi trường ngày càng nghiêm trọng.
            Rác thải gây ra rất nhiều vấn đề, như: mùi khó chịu, vi trùng gây
            bệnh, điều kiện sinh hoạt mất vệ sinh. Rác thải không được thu gom,
            tồn đọng, lâu ngày sẽ sinh ra các tác nhân tác động đến sức khoẻ con
            người.
          </div>
        </div>

        <div className="main--dump">
          <div className="main--problem">
            <h1 className="main--problem1">Vấn nạn ô nhiễm môi trường</h1>
            <div className="main--problem2">
              Cần hành động ngay vì một Việt Nam xanh và sạch
            </div>
          </div>

          <div className="main--pics">
            <div className="main--second_pic"></div>
            <div className="main--third_pic"></div>
          </div>
        </div>

        <div className="main--doiqua">
          <div className="main--gift">
            <div className="main--left_text">
              <div className="main--upper">
                <h3 className="main--tichdiem">Tích điểm đổi quà</h3>
                <div className="main--banseduoc">
                  Bạn sẽ được thưởng điểm tương ứng với mỗi nhiệm vụ thành công.
                  Quy đổi điểm thưởng để đổi lấy các phần quà hấp dẫn.
                </div>
              </div>

              <button className="main--dennhiemvu" onClick={HandleToMissions}>Đến nhiệm vụ</button>
            </div>

            <div className="main--right_text">
              <img src={gift} alt="fck"></img>
            </div>
          </div>
        </div>

        <div className="main--tiepcan">
          <h3 className="main--cachchungta">Cách chúng ta tiếp cận</h3>
          <div className="main--chungtoi">
            Chúng tôi tạo cơ hội cho các cá nhân và cộng đồng tham gia tích cực
            vào việc xử lý môi trường và tạo giá trị riêng cho bản thân.
          </div>

          <img src={volunteer2} alt="" className="main--volunteer2"></img>

          <h3 className="main--hayhanhdong">
            “HÃY HÀNH ĐỘNG cùng nhau, chúng ta có thể cứu môi trường”
          </h3>

          <div className="main--last">
            <div className="main--greenenv">(c) Green Env Viet Nam</div>

            <div className="main--middle">
              <div className="main--mail">Greenenv@gmail.com</div>

              <div className="main--number">(+84) 912 345 678</div>
            </div>

            <div className="main--icon">
              <img src={twitter} alt=""></img>
              <img src={insta} alt=""></img>
              <img src={dribble} alt=""></img>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
