import React, { useState, useEffect } from 'react';
import { Heart, Star, Gift, Camera, Music, MessageCircle, Sparkles, Upload, Users, Award, Send, Play, Image, Video, FileText, Calendar, Building2, Trophy } from 'lucide-react';

const BirthdayScreen = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [wishes, setWishes] = useState([]);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [showWishForm, setShowWishForm] = useState(false);
  
  // Form states
  const [wishForm, setWishForm] = useState({
    name: '',
    department: '',
    position: '',
    message: '',
    isAnonymous: false
  });
  
  const [uploadForm, setUploadForm] = useState({
    uploaderName: '',
    department: '',
    title: '',
    description: '',
    fileType: 'image'
  });

  // Sample data - sẽ được thay thế bởi uploads thực tế
  const [sampleWishes] = useState([
    {
      name: "Nguyễn Văn A",
      department: "Phòng IT",
      position: "Developer",
      message: "Chúc sếp sinh nhật vui vẻ! Cảm ơn sếp đã luôn hỗ trợ và tạo điều kiện cho team phát triển. Chúc sếp sức khỏe, thành công và hạnh phúc! 🎉",
      isAnonymous: false,
      timestamp: new Date().toLocaleDateString()
    },
    {
      name: "Ẩn danh",
      department: "Phòng Marketing",
      position: "Specialist",
      message: "Boss ơi, chúc sinh nhật vui vẻ! Làm việc dưới quyền boss là một trải nghiệm tuyệt vời. Cảm ơn boss đã tin tưởng và tạo cơ hội cho chúng em! 🎂",
      isAnonymous: true,
      timestamp: new Date().toLocaleDateString()
    },
    {
      name: "Trần Thị B",
      department: "Phòng Nhân sự",
      position: "HR Manager",
      message: "Chúc Giám đốc có một sinh nhật thật ý nghĩa! Dưới sự lãnh đạo của anh, công ty ngày càng phát triển. Chúc anh luôn khỏe mạnh và thành đạt! 💼",
      isAnonymous: false,
      timestamp: new Date().toLocaleDateString()
    }
  ]);

  const [sampleFiles] = useState([
    {
      id: 1,
      type: 'image',
      title: 'Kỷ niệm team building',
      description: 'Chuyến team building đáng nhớ với sự tham gia của sếp',
      uploadedBy: 'Phòng IT',
      url: '🏔️', // Placeholder
      timestamp: '2024-01-15'
    },
    {
      id: 2,
      type: 'video',
      title: 'Video chúc mừng từ toàn thể nhân viên',
      description: 'Clip tổng hợp lời chúc từ các phòng ban',
      uploadedBy: 'Phòng Truyền thông',
      url: '🎬', // Placeholder
      timestamp: '2024-01-20'
    },
    {
      id: 3,
      type: 'image',
      title: 'Lễ kỷ niệm thành lập công ty',
      description: 'Những khoảnh khắc đáng nhớ trong ngày đặc biệt',
      uploadedBy: 'Phòng Hành chính',
      url: '🏢', // Placeholder
      timestamp: '2024-02-01'
    }
  ]);

  // Departments list
  const departments = [
    'Phòng IT', 'Phòng Marketing', 'Phòng Nhân sự', 'Phòng Kế toán', 
    'Phòng Kinh doanh', 'Phòng Hành chính', 'Phòng Truyền thông', 'Khác'
  ];

  // Auto confetti effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowConfetti(prev => !prev);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleWishSubmit = () => {
    if (!wishForm.department || !wishForm.message || (!wishForm.isAnonymous && !wishForm.name)) {
      alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
      return;
    }
    const newWish = {
      ...wishForm,
      timestamp: new Date().toLocaleDateString(),
      name: wishForm.isAnonymous ? 'Ẩn danh' : wishForm.name
    };
    setWishes([newWish, ...wishes]);
    setWishForm({ name: '', department: '', position: '', message: '', isAnonymous: false });
    setShowWishForm(false);
    alert('Lời chúc đã được gửi thành công! 🎉');
  };

  const handleFileUpload = () => {
    if (!uploadForm.uploaderName || !uploadForm.department || !uploadForm.title) {
      alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
      return;
    }
    // Trong thực tế, đây sẽ là nơi upload file lên server
    const newFile = {
      id: Date.now(),
      ...uploadForm,
      timestamp: new Date().toLocaleDateString(),
      url: uploadForm.fileType === 'video' ? '🎬' : '📸' // Placeholder
    };
    setUploadedFiles([newFile, ...uploadedFiles]);
    setUploadForm({ uploaderName: '', department: '', title: '', description: '', fileType: 'image' });
    setShowUploadForm(false);
    alert('File đã được upload thành công! 📁');
  };

  const sections = [
    { id: 'intro', title: 'Chào mừng', icon: Sparkles },
    { id: 'stats', title: 'Thống kê', icon: Award },
    { id: 'wishes', title: 'Lời chúc', icon: Heart },
    { id: 'gallery', title: 'Thư viện', icon: Camera },
    { id: 'upload', title: 'Đóng góp', icon: Upload },
    { id: 'celebration', title: 'Lễ hội', icon: Gift }
  ];

  const ConfettiEffect = () => (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className={`absolute animate-bounce ${showConfetti ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        >
          {['🎉', '🎊', '🌟', '💼', '🏆', '🎂', '🎈', '✨'][Math.floor(Math.random() * 8)]}
        </div>
      ))}
    </div>
  );

  const IntroSection = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <Building2
            key={i}
            className="absolute text-white animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
            size={Math.random() * 20 + 15}
          />
        ))}
      </div>
      
      <div className="text-center z-10 px-4 max-w-4xl">
        <div className="animate-bounce mb-8">
          <div className="text-8xl mb-6">🎂</div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            CHÚC MỪNG SINH NHẬT
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-8">
            GIÁM ĐỐC THÂN YÊU!
          </h2>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="text-yellow-300 mr-3" size={40} />
            <p className="text-2xl md:text-3xl text-white font-semibold">
              Từ Toàn Thể Nhân Viên Công Ty
            </p>
            <Trophy className="text-yellow-300 ml-3" size={40} />
          </div>
          <p className="text-lg text-white/90 mb-4">
            Nhân dịp sinh nhật, chúng em xin gửi đến anh những lời chúc tốt đẹp nhất!
          </p>
          <p className="text-lg text-white/90">
            Cảm ơn anh đã luôn là người lãnh đạo tuyệt vời và tạo động lực cho tất cả chúng em! 🙏
          </p>
        </div>
        
        <button
          onClick={() => setCurrentSection(1)}
          className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Khám phá những món quà đặc biệt 🎁
        </button>
      </div>
    </div>
  );

  const StatsSection = () => {
    const stats = [
      { number: sampleWishes.length + wishes.length, label: 'Lời chúc đã nhận', icon: Heart, color: 'from-pink-500 to-rose-600' },
      { number: sampleFiles.length + uploadedFiles.length, label: 'File kỷ niệm', icon: Camera, color: 'from-blue-500 to-indigo-600' },
      { number: departments.length, label: 'Phòng ban tham gia', icon: Building2, color: 'from-green-500 to-emerald-600' },
      { number: '100', label: '% Tình yêu thương', icon: Award, color: 'from-yellow-500 to-orange-600' }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">📊 Thống Kê Sinh Nhật Đặc Biệt 📊</h2>
            <p className="text-xl text-slate-600">Những con số biết nói về tình cảm của nhân viên</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="text-4xl font-bold text-slate-800 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">🏢 Sự tham gia theo phòng ban</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {departments.slice(0, 8).map((dept, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">🏢</div>
                  <div className="text-sm font-semibold text-slate-700">{dept}</div>
                  <div className="text-xs text-slate-500 mt-1">Đã tham gia</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const WishesSection = () => {
    const allWishes = [...sampleWishes, ...wishes];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-100 to-pink-200 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-rose-800 mb-4">💌 Lời Chúc Từ Nhân Viên 💌</h2>
            <p className="text-xl text-rose-600">Những lời chúc chân thành nhất từ tất cả mọi người</p>
            
            <button
              onClick={() => setShowWishForm(true)}
              className="mt-6 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-rose-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Send className="inline mr-2" size={18} />
              Gửi lời chúc của bạn
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allWishes.map((wish, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {wish.isAnonymous ? '🎭' : wish.name[0]}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">{wish.name}</h3>
                    <div className="text-sm text-gray-600">{wish.department} • {wish.position}</div>
                    <div className="text-xs text-gray-400">{wish.timestamp}</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{wish.message}</p>
                <div className="flex justify-end">
                  <Heart className="text-rose-400" size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const GallerySection = () => {
    const allFiles = [...sampleFiles, ...uploadedFiles];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-100 to-orange-200 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-800 mb-4">🎬 Thư Viện Kỷ Niệm 🎬</h2>
            <p className="text-xl text-amber-600">Những khoảnh khắc đẹp cùng với sếp</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allFiles.map((file, index) => (
              <div 
                key={file.id || index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 h-48 flex items-center justify-center text-6xl relative">
                  {file.url}
                  <div className="absolute top-4 right-4">
                    {file.type === 'video' ? (
                      <Video className="text-white bg-black/20 rounded-full p-2" size={32} />
                    ) : (
                      <Image className="text-white bg-black/20 rounded-full p-2" size={32} />
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{file.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{file.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>📤 {file.uploadedBy}</span>
                    <span>📅 {file.timestamp}</span>
                  </div>
                  <button className="w-full mt-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white py-2 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300">
                    {file.type === 'video' ? (
                      <>
                        <Play className="inline mr-2" size={16} />
                        Xem video
                      </>
                    ) : (
                      <>
                        <Image className="inline mr-2" size={16} />
                        Xem ảnh
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const UploadSection = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-teal-200 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-emerald-800 mb-4">📤 Đóng Góp Của Bạn 📤</h2>
          <p className="text-xl text-emerald-600">Hãy chia sẻ kỷ niệm và lời chúc của bạn!</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload File Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <Upload className="mx-auto text-emerald-600 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Upload Kỷ Niệm</h3>
              <p className="text-gray-600">Chia sẻ video hoặc hình ảnh kỷ niệm với sếp</p>
            </div>
            
            <button
              onClick={() => setShowUploadForm(true)}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Camera className="inline mr-2" size={20} />
              Chọn file để upload
            </button>
            
            <div className="mt-6 text-sm text-gray-500">
              <p>• Hỗ trợ: JPG, PNG, MP4, MOV</p>
              <p>• Kích thước tối đa: 50MB</p>
              <p>• Video tối đa: 5 phút</p>
            </div>
          </div>

          {/* Send Wish Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <MessageCircle className="mx-auto text-rose-600 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Gửi Lời Chúc</h3>
              <p className="text-gray-600">Viết lời chúc sinh nhật chân thành đến sếp</p>
            </div>
            
            <button
              onClick={() => setShowWishForm(true)}
              className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Heart className="inline mr-2" size={20} />
              Viết lời chúc
            </button>
            
            <div className="mt-6 text-sm text-gray-500">
              <p>• Có thể gửi ẩn danh</p>
              <p>• Tự động hiển thị phòng ban</p>
              <p>• Lời chúc sẽ được duyệt</p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">📝 Hướng Dẫn Đóng Góp</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold mb-2">Chọn loại đóng góp</h4>
              <p className="text-sm text-gray-600">Upload file kỷ niệm hoặc gửi lời chúc</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-green-600">2</span>
              </div>
              <h4 className="font-semibold mb-2">Điền thông tin</h4>
              <p className="text-sm text-gray-600">Cung cấp tên, phòng ban và nội dung</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="font-semibold mb-2">Gửi & Chờ duyệt</h4>
              <p className="text-sm text-gray-600">Nội dung sẽ hiển thị sau khi được duyệt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CelebrationSection = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${Math.random() * 20 + 20}px`
            }}
          >
            {['🎉', '🎊', '🎁', '🎂', '🌟', '💼', '🏆', '✨'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>
      
      <div className="text-center z-10 px-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12">
          <div className="text-6xl mb-6">🎊</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            CHÚC MỪNG SINH NHẬT SẾP YÊU!
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8">
            Cảm ơn sếp vì tất cả! Chúc sếp luôn hạnh phúc và thành công! 🎯
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: '🎁', text: 'Món quà đặc biệt' },
              { icon: '🍰', text: 'Bánh sinh nhật' },
              { icon: '🎵', text: 'Nhạc chúc mừng' },
              { icon: '📸', text: 'Chụp ảnh kỷ niệm' }
            ].map((item, index) => (
              <div key={index} className="bg-white/20 rounded-xl p-4 hover:bg-white/30 transition-all duration-300 cursor-pointer">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-white font-semibold text-sm">{item.text}</div>
              </div>
            ))}
          </div>
          
          <button
            onClick={() => setShowConfetti(!showConfetti)}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg mr-4 mb-4"
          >
            🎉 Bắn pháo hoa! 🎉
          </button>
          
          <div className="mt-8 text-white/80">
            <p className="text-lg">💙 Từ toàn thể nhân viên với tình cảm chân thành nhất 💙</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Upload Form Modal
  const UploadFormModal = () => (
    showUploadForm && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
          <h3 className="text-2xl font-bold mb-6">📤 Upload File Kỷ Niệm</h3>
          
          <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Tên của bạn *</label>
                <input
                  type="text"
                  value={uploadForm.uploaderName}
                  onChange={(e) => setUploadForm({...uploadForm, uploaderName: e.target.value})}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                  placeholder="Nhập tên của bạn"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Phòng ban *</label>
                <select
                  value={uploadForm.department}
                  onChange={(e) => setUploadForm({...uploadForm, department: e.target.value})}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                >
                  <option value="">Chọn phòng ban</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Loại file *</label>
                <select
                  value={uploadForm.fileType}
                  onChange={(e) => setUploadForm({...uploadForm, fileType: e.target.value})}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                >
                  <option value="image">Hình ảnh</option>
                  <option value="video">Video</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Tiêu đề *</label>
                <input
                  type="text"
                  value={uploadForm.title}
                  onChange={(e) => setUploadForm({...uploadForm, title: e.target.value})}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                  placeholder="VD: Kỷ niệm team building 2024"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Mô tả</label>
                <textarea
                  value={uploadForm.description}
                  onChange={(e) => setUploadForm({...uploadForm, description: e.target.value})}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none h-20 resize-none"
                  placeholder="Mô tả ngắn về file này..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Chọn file *</label>
                <input
                  type="file"
                  accept={uploadForm.fileType === 'video' ? 'video/*' : 'image/*'}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => setShowUploadForm(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300"
              >
                Hủy
              </button>
              <button
                onClick={handleFileUpload}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
              >
                Upload
              </button>
            </div>
        </div>
      </div>
    )
  );

  // Wish Form Modal
  const WishFormModal = () => (
    showWishForm && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
          <h3 className="text-2xl font-bold mb-6">💌 Gửi Lời Chúc</h3>
          
          <div className="space-y-4">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={wishForm.isAnonymous}
                  onChange={(e) => setWishForm({...wishForm, isAnonymous: e.target.checked})}
                  className="mr-3"
                />
                <label htmlFor="anonymous" className="text-sm font-semibold">Gửi ẩn danh</label>
              </div>
              
              {!wishForm.isAnonymous && (
                <div>
                  <label className="block text-sm font-semibold mb-2">Tên của bạn *</label>
                  <input
                    type="text"
                    value={wishForm.name}
                    onChange={(e) => setWishForm({...wishForm, name: e.target.value})}
                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-rose-500 outline-none"
                    placeholder="Nhập tên của bạn"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-semibold mb-2">Phòng ban *</label>
                <select
                  value={wishForm.department}
                  onChange={(e) => setWishForm({...wishForm, department: e.target.value})}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-rose-500 outline-none"
                >
                  <option value="">Chọn phòng ban</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Chức vụ</label>
                <input
                  type="text"
                  value={wishForm.position}
                  onChange={(e) => setWishForm({...wishForm, position: e.target.value})}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-rose-500 outline-none"
                  placeholder="VD: Developer, Manager, Specialist..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Lời chúc *</label>
                <textarea
                  value={wishForm.message}
                  onChange={(e) => setWishForm({...wishForm, message: e.target.value})}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-rose-500 outline-none h-32 resize-none"
                  placeholder="Viết lời chúc sinh nhật chân thành đến sếp..."
                />
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => setShowWishForm(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300"
              >
                Hủy
              </button>
              <button
                onClick={handleWishSubmit}
                className="flex-1 bg-gradient-to-r from-rose-500 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-300"
              >
                Gửi lời chúc
              </button>
            </div>
        </div>
      </div>
    )
  );

  const renderSection = () => {
    switch (currentSection) {
      case 0: return <IntroSection />;
      case 1: return <StatsSection />;
      case 2: return <WishesSection />;
      case 3: return <GallerySection />;
      case 4: return <UploadSection />;
      case 5: return <CelebrationSection />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen">
      <ConfettiEffect />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Building2 className="text-blue-600" size={24} />
              <span className="font-bold text-xl text-gray-800">Happy Birthday Boss</span>
            </div>
            
            <div className="flex space-x-1">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentSection(index)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-all duration-300 ${
                      currentSection === index 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : 'text-gray-600 hover:bg-blue-100'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="hidden md:inline text-sm">{section.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="pt-16">
        {renderSection()}
      </main>
      
      {/* Modals */}
      <UploadFormModal />
      <WishFormModal />
      
      {/* Navigation Arrows */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
        <button
          onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
          disabled={currentSection === 0}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
            currentSection === 0 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-white text-blue-600 hover:bg-blue-50'
          }`}
        >
          ←
        </button>
        
        <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
          <span className="text-sm font-semibold text-gray-700">
            {currentSection + 1} / {sections.length}
          </span>
        </div>
        
        <button
          onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
          disabled={currentSection === sections.length - 1}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
            currentSection === sections.length - 1 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-white text-blue-600 hover:bg-blue-50'
          }`}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default BirthdayScreen;