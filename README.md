<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
     <link rel="stylesheet" href="style.css">
</head>
<body>
    <body>
    <!-- Navigation -->
    <nav class="animate-fade-in">
        <div class="logo">
            <div class="logo-icon">📹</div>
            <span class="logo-text">Learn Tenso</span>
        </div>
        <div class="nav-buttons" id="navButtons">
            <button class="btn-ghost" onclick="openAuthModal('signin')">Sign In</button>
            <button class="btn-primary" onclick="openAuthModal('signup')">Get Started</button>
        </div>
    </nav>

    <!-- Main Content -->
    <div id="mainContent">
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <h1 class="animate-fade-in">
                    Exchange Skills,<br>
                    <span class="gradient-text">Transform Lives</span>
                </h1>
                <p class="animate-fade-in">Connect with learners worldwide through live video sessions. Share what you know, learn what you love.</p>
                <div class="hero-buttons animate-fade-in" id="heroButtons">
                    <button class="btn-primary btn-large hover-scale" onclick="openAuthModal('signup')">
                        Start Learning Today ✨
                    </button>
                    <button class="btn-outline btn-large hover-scale" onclick="openAuthModal('signin')">
                        Already a Member?
                    </button>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="features">
            <div class="container">
                <div class="features-grid">
                    <div class="card animate-fade-in hover-scale" style="animation-delay: 100ms;">
                        <div class="card-header">
                            <h3 class="card-title">
                                📹 Live Video Sessions
                            </h3>
                        </div>
                        <div class="card-content">
                            <p class="card-description">Connect face-to-face with skilled teachers through high-quality video calls. Learn interactively and get instant feedback.</p>
                        </div>
                    </div>

                    <div class="card animate-fade-in hover-scale" style="animation-delay: 200ms;">
                        <div class="card-header">
                            <h3 class="card-title">
                                🤝 Smart Matching
                            </h3>
                        </div>
                        <div class="card-content">
                            <p class="card-description">Our algorithm matches you with the perfect learning partner based on your skills and learning goals.</p>
                        </div>
                    </div>

                    <div class="card animate-fade-in hover-scale" style="animation-delay: 300ms;">
                        <div class="card-header">
                            <h3 class="card-title">
                                ⚡ Skill Exchange
                            </h3>
                        </div>
                        <div class="card-content">
                            <p class="card-description">Trade your expertise for new knowledge. Teach what you know and learn what you want in a mutual exchange.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Popular Skills Section -->
        <section class="skills">
            <div class="container">
                <h2 class="animate-fade-in">Popular Skills</h2>
                <div class="skills-grid">
                    <div class="skill-item animate-fade-in hover-scale" style="animation-delay: 100ms;">
                        <span class="badge">Web Development ⭐</span>
                        <p class="skill-count">245 learners</p>
                    </div>
                    <div class="skill-item animate-fade-in hover-scale" style="animation-delay: 150ms;">
                        <span class="badge">Graphic Design</span>
                        <p class="skill-count">189 learners</p>
                    </div>
                    <div class="skill-item animate-fade-in hover-scale" style="animation-delay: 200ms;">
                        <span class="badge">Digital Marketing ⭐</span>
                        <p class="skill-count">156 learners</p>
                    </div>
                    <div class="skill-item animate-fade-in hover-scale" style="animation-delay: 250ms;">
                        <span class="badge">Photography</span>
                        <p class="skill-count">132 learners</p>
                    </div>
                    <div class="skill-item animate-fade-in hover-scale" style="animation-delay: 300ms;">
                        <span class="badge">Music Production ⭐</span>
                        <p class="skill-count">98 learners</p>
                    </div>
                    <div class="skill-item animate-fade-in hover-scale" style="animation-delay: 350ms;">
                        <span class="badge">Language Learning</span>
                        <p class="skill-count">87 learners</p>
                    </div>
                    <div class="skill-item animate-fade-in hover-scale" style="animation-delay: 400ms;">
                        <span class="badge">UI/UX Design ⭐</span>
                        <p class="skill-count">76 learners</p>
                    </div>
                    <div class="skill-item animate-fade-in hover-scale" style="animation-delay: 450ms;">
                        <span class="badge">Data Science</span>
                        <p class="skill-count">65 learners</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="hero" id="ctaSection">
            <div class="container">
                <h2 class="animate-fade-in" style="font-size: 3rem; margin-bottom: 24px;">Ready to Start Your Learning Journey?</h2>
                <p class="animate-fade-in" style="margin-bottom: 32px;">Join thousands of learners who are already exchanging skills and transforming their lives.</p>
                <button class="btn-primary btn-large hover-scale animate-bounce-gentle" onclick="openAuthModal('signup')" id="finalCTA">
                    🚀 Join Learn Tenso Now
                </button>
            </div>
        </section>
    </div>

    <!-- Auth Modal -->
    <div id="authModal" class="modal">
        <div class="modal-content animate-scale-in">
            <div class="modal-header">
                <h2 class="modal-title">Welcome to Learn Tenso</h2>
                <p class="modal-subtitle">Connect, Learn, and Grow Together</p>
                <button class="close-btn" onclick="closeModal('authModal')">&times;</button>
            </div>
            <div class="modal-body">
                <div class="tabs">
                    <div class="tab-list">
                        <button class="tab-button active" onclick="switchTab('signup')" id="signupTab">Sign Up</button>
                        <button class="tab-button" onclick="switchTab('signin')" id="signinTab">Sign In</button>
                    </div>
                    
                    <div id="signup-tab" class="tab-content active">
                        <form onsubmit="handleAuth(event, 'signup')" id="signupForm">
                            <div class="form-group">
                                <label for="signup-name">Full Name</label>
                                <input type="text" id="signup-name" placeholder="Enter your full name" required>
                            </div>
                            <div class="form-group">
                                <label for="signup-email">Email Address</label>
                                <input type="email" id="signup-email" placeholder="Enter your email" required>
                            </div>
                            <div class="form-group">
                                <label for="signup-password">Password</label>
                                <input type="password" id="signup-password" placeholder="Create a strong password" required>
                            </div>
                            <div class="form-group">
                                <label for="signup-confirm">Confirm Password</label>
                                <input type="password" id="signup-confirm" placeholder="Confirm your password" required>
                            </div>
                            <button type="submit" class="btn-primary hover-scale" style="width: 100%;" id="signupBtn">
                                Create Account
                            </button>
                        </form>
                    </div>
                    
                    <div id="signin-tab" class="tab-content">
                        <form onsubmit="handleAuth(event, 'signin')" id="signinForm">
                            <div class="form-group">
                                <label for="signin-email">Email Address</label>
                                <input type="email" id="signin-email" placeholder="Enter your email" required>
                            </div>
                            <div class="form-group">
                                <label for="signin-password">Password</label>
                                <input type="password" id="signin-password" placeholder="Enter your password" required>
                            </div>
                            <div class="form-group">
                                <label style="display: flex; align-items: center; gap: 8px; font-weight: normal;">
                                    <input type="checkbox" style="width: auto;"> Remember me
                                </label>
                            </div>
                            <button type="submit" class="btn-primary hover-scale" style="width: 100%;" id="signinBtn">
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Skills Modal -->
    <div id="skillsModal" class="modal">
        <div class="modal-content large animate-scale-in">
            <div class="modal-header">
                <h2 class="modal-title">Choose Your Skills</h2>
                <p class="modal-subtitle">Select skills you can teach and want to learn to get matched with perfect partners</p>
                <button class="close-btn" onclick="closeModal('skillsModal')">&times;</button>
            </div>
            <div class="modal-body">
                <div class="tabs">
                    <div class="tab-list">
                        <button class="tab-button active" onclick="switchSkillTab('teach')" id="teachTab">
                            💡 I Can Teach
                        </button>
                        <button class="tab-button" onclick="switchSkillTab('learn')" id="learnTab">
                            📚 I Want to Learn
                        </button>
                    </div>
                    
                    <div id="teach-skills-tab" class="tab-content active">
                        <h4 style="margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                            ⭐ What skills can you teach?
                        </h4>
                        <div class="skills-selection" id="teachSkills"></div>
                        <div class="custom-skill">
                            <input type="text" id="customTeachSkill" placeholder="Add custom skill...">
                            <button onclick="addCustomSkill('teach')" class="btn-outline hover-scale">➕ Add</button>
                        </div>
                    </div>
                    
                    <div id="learn-skills-tab" class="tab-content">
                        <h4 style="margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                            📖 What skills do you want to learn?
                        </h4>
                        <div class="skills-selection" id="learnSkills"></div>
                        <div class="custom-skill">
                            <input type="text" id="customLearnSkill" placeholder="Add custom skill...">
                            <button onclick="addCustomSkill('learn')" class="btn-outline hover-scale">➕ Add</button>
                        </div>
                    </div>
                </div>

                <div class="selected-skills" id="selectedSkillsContainer">
                    <h4 id="selectedSkillsTitle">Selected Teaching Skills (0)</h4>
                    <div id="selectedSkillsDisplay">
                        <p style="color: #9ca3af; font-size: 14px;">No skills selected yet</p>
                    </div>
                </div>

                <div style="display: flex; gap: 12px; margin-top: 24px;">
                    <button class="btn-outline hover-scale" style="flex: 1;" onclick="closeModal('skillsModal')">Cancel</button>
                    <button class="btn-primary hover-scale" style="flex: 1;" onclick="saveSkills()" id="saveSkillsBtn">
                        Save & Find Matches 🎯
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Profile Modal -->
    <div id="profileModal" class="modal">
        <div class="modal-content large animate-scale-in">
            <div class="modal-header">
                <h2 class="modal-title">My Profile</h2>
                <p class="modal-subtitle">Manage your learning journey</p>
                <button class="close-btn" onclick="closeModal('profileModal')">&times;</button>
            </div>
            <div class="modal-body">
                <div class="profile-header">
                    <div class="profile-avatar" onclick="document.getElementById('avatarInput').click()">
                        <span id="avatarDisplay">👤</span>
                        <input type="file" id="avatarInput" accept="image/*" onchange="handleAvatarUpload(event)">
                    </div>
                    <div class="profile-info">
                        <h3 id="profileName">John Doe</h3>
                        <p id="profileEmail">john.doe@example.com</p>
                        <p style="font-size: 12px; color: #64748b;">Member since <span id="joinDate">Jan 2024</span></p>
                        <button class="btn-outline btn-small" onclick="editProfile()" style="margin-top: 8px; padding: 6px 12px; font-size: 12px;">
                            ✏️ Edit Profile
                        </button>
                    </div>
                </div>

                <div class="profile-stats">
                    <div class="stat-item">
                        <div class="stat-value" id="sessionsCount">0</div>
                        <div class="stat-label">Sessions</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value" id="teachingCount">0</div>
                        <div class="stat-label">Teaching</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value" id="learningCount">0</div>
                        <div class="stat-label">Learning</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">⭐ 5.0</div>
                        <div class="stat-label">Rating</div>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">💡 Teaching Skills</h3>
                        </div>
                        <div class="card-content">
                            <div id="profileTeachingSkills">
                                <p style="color: #9ca3af; font-size: 14px;">No teaching skills yet</p>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">📚 Learning Skills</h3>
                        </div>
                        <div class="card-content">
                            <div id="profileLearningSkills">
                                <p style="color: #9ca3af; font-size: 14px;">No learning goals yet</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card" style="margin-top: 20px;">
                    <div class="card-header">
                        <h3 class="card-title">🏆 Achievements</h3>
                    </div>
                    <div class="card-content">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
                            <div class="achievement" style="padding: 12px; background: rgba(34, 197, 94, 0.1); border-radius: 6px; border: 1px solid rgba(34, 197, 94, 0.3);">
                                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                                    <span style="font-size: 16px;">🎉</span>
                                    <span style="font-weight: 600; color: #22c55e;">First Session</span>
                                </div>
                                <p style="font-size: 12px; color: #9ca3af;">Completed your first video session</p>
                            </div>
                            <div class="achievement" style="padding: 12px; background: rgba(148, 163, 184, 0.1); border-radius: 6px; border: 1px solid rgba(148, 163, 184, 0.3);">
                                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                                    <span style="font-size: 16px;">🎓</span>
                                    <span style="font-weight: 600; color: #94a3b8;">Knowledge Sharer</span>
                                </div>
                                <p style="font-size: 12px; color: #9ca3af;">Teach 5 different skills</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="display: flex; gap: 12px; margin-top: 24px;">
                    <button class="btn-outline hover-scale" onclick="closeModal('profileModal')" style="flex: 1;">Close</button>
                    <button class="btn-primary hover-scale" onclick="openSkillsFromProfile()" style="flex: 1;">
                        🔄 Update Skills
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Video Session -->
    <div id="videoSession" class="video-session">
        <div class="container">
            <div class="card session-header">
                <div class="card-content">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px;">
                        <div>
                            <h2 class="card-title">📹 Video Session with Sarah Chen</h2>
                            <div class="session-info">
                                <span class="badge badge-green">Teaching: Web Development</span>
                                <span class="badge badge-blue">Learning: UI/UX Design</span>
                                <div class="session-timer" id="sessionTimer">00:00</div>
                                <div style="display: flex; align-items: center; gap: 4px;">
                                    <div class="status-dot" style="margin: 0;"></div>
                                    <span style="color: #22c55e; font-size: 12px;">Live</span>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex; gap: 12px;">
                            <button id="sessionToggle" class="btn-success hover-scale" onclick="toggleSession()">
                                ▶️ Start Session
                            </button>
                            <button class="btn-outline hover-scale" onclick="showExitConfirm()">
                                ❌ Exit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="video-grid">
                <div class="card animate-fade-in">
                    <div class="card-header">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <h3 class="card-title">
                                👩‍💻 Sarah Chen
                            </h3>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span style="font-size: 12px; color: #9ca3af;">⭐ 4.9 • 156 sessions</span>
                                <div id="partnerDot" class="status-dot hidden" style="margin: 0;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="video-placeholder" id="partnerVideo">
                            <div class="video-icon">👩‍💻</div>
                            <p id="partnerStatus">Waiting to connect...</p>
                        </div>
                    </div>
                </div>

                <div class="card animate-fade-in" style="animation-delay: 200ms;">
                    <div class="card-header">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <h3 class="card-title">
                                👤 You (<span id="userName">John Doe</span>)
                            </h3>
                            <div class="status-dot" style="margin: 0;"></div>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="video-placeholder active" id="userVideo">
                            <div class="video-icon">👤</div>
                            <p>Your Camera</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-content">
                    <div class="session-controls">
                        <button class="btn-outline control-btn hover-scale" id="muteBtn" onclick="toggleMute()">
                            🎤 Mute Audio
                        </button>
                        <button class="btn-outline control-btn hover-scale" id="videoBtn" onclick="toggleVideo()">
                            📹 Turn Off Video
                        </button>
                        <button class="btn-outline control-btn hover-scale" onclick="shareScreen()">
                            🖥️ Share Screen
                        </button>
                        <button class="btn-outline control-btn hover-scale" onclick="openChat()">
                            💬 Chat
                        </button>
                        <button class="btn-outline control-btn hover-scale" onclick="openSettings()">
                            ⚙️ Settings
                        </button>
                    </div>
                </div>
            </div>

            <div id="sessionMessage" class="session-message hidden">
                <p>🎉 Session is live! Start sharing your knowledge.</p>
            </div>
        </div>
    </div>

    <!-- Exit Confirmation Modal -->
    <div id="exitModal" class="modal exit-modal">
        <div class="modal-content animate-scale-in">
            <div class="modal-header">
                <h2 class="modal-title">End Session?</h2>
                <button class="close-btn" onclick="closeModal('exitModal')">&times;</button>
            </div>
            <div class="modal-body">
                <div class="icon">⚠️</div>
                <p style="margin-bottom: 24px; color: #d1d5db;">
                    Are you sure you want to end this session? This action cannot be undone.
                </p>
                <div style="display: flex; gap: 12px;">
                    <button class="btn-outline hover-scale" onclick="closeModal('exitModal')" style="flex: 1;">
                        Cancel
                    </button>
                    <button class="btn-destructive hover-scale" onclick="endSession()" style="flex: 1;">
                        End Session
                    </button>
                </div>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html># Learning_website
