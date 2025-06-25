
        // Available skills
        const availableSkills = [
            'Web Development', 'Mobile Development', 'Data Science', 'Machine Learning',
            'Graphic Design', 'UI/UX Design', 'Digital Marketing', 'SEO',
            'Photography', 'Video Editing', 'Music Production', 'Writing',
            'Language Learning', 'Public Speaking', 'Project Management', 'Business Strategy',
            'Cooking', 'Fitness Training', 'Yoga', 'Meditation', 'Art & Illustration',
            'Game Development', 'Blockchain', 'Cybersecurity', 'Animation'
        ];

        // State
        let isAuthenticated = false;
        let selectedTeachSkills = [];
        let selectedLearnSkills = [];
        let currentSkillTab = 'teach';
        let sessionStarted = false;
        let sessionTime = 0;
        let sessionTimer = null;
        let isMuted = false;
        let isVideoOff = false;
        let currentUser = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            avatar: null,
            bio: '',
            joinedDate: new Date().toISOString(),
            sessionsCompleted: 0,
            rating: 5.0
        };

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            initializeSkills();
            
            // Add staggered animations
            const animatedElements = document.querySelectorAll('.animate-fade-in');
            animatedElements.forEach((el, index) => {
                el.style.animationDelay = `${index * 100}ms`;
            });
        });

        // Utility Functions
        function showToast(message, type = 'success') {
            const toast = document.createElement('div');
            toast.className = `toast toast-${type}`;
            toast.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 16px 24px;
                background: ${type === 'success' ? 'linear-gradient(135deg, #16a34a, #22c55e)' : 'linear-gradient(135deg, #dc2626, #ef4444)'};
                color: white;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                z-index: 10000;
                animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
                max-width: 300px;
                font-weight: 500;
            `;
            toast.textContent = message;
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.remove();
            }, 3000);
        }

        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }

        // Modal functions
        function openAuthModal(mode) {
            document.getElementById('authModal').classList.add('active');
            switchTab(mode);
        }

        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.classList.remove('active');
                modal.style.opacity = '1';
            }, 300);
        }

        function switchTab(tab) {
            // Remove active class from all tabs
            document.querySelectorAll('#authModal .tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('#authModal .tab-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to selected tab
            document.getElementById(tab + 'Tab').classList.add('active');
            document.getElementById(tab + '-tab').classList.add('active');
        }

        // Auth functions
        function handleAuth(event, mode) {
            event.preventDefault();
            const btn = event.target.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            // Show loading
            btn.innerHTML = '<span class="loading"></span> ' + (mode === 'signup' ? 'Creating Account...' : 'Signing In...');
            btn.disabled = true;

            // Validate passwords for signup
            if (mode === 'signup') {
                const password = document.getElementById('signup-password').value;
                const confirm = document.getElementById('signup-confirm').value;
                if (password !== confirm) {
                    showToast('Passwords do not match!', 'error');
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    return;
                }
                
                const name = document.getElementById('signup-name').value;
                const email = document.getElementById('signup-email').value;
                currentUser.name = name;
                currentUser.email = email;
            }
            
            // Simulate authentication
            setTimeout(() => {
                isAuthenticated = true;
                closeModal('authModal');
                updateAuthenticatedUI();
                showToast(`Welcome ${mode === 'signup' ? 'to' : 'back to'} Learn Tenso! 🎉`);
                
                // Reset form
                event.target.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
                
                // Open skills modal
                setTimeout(() => {
                    document.getElementById('skillsModal').classList.add('active');
                }, 500);
            }, 1500);
        }

        function updateAuthenticatedUI() {
            // Update navigation
            document.getElementById('navButtons').innerHTML = `
                <button class="btn-outline hover-scale" onclick="showVideoSession()">
                    📹 Start Session
                </button>
                <button class="btn-primary hover-scale" onclick="openProfileModal()">
                    👤 Profile
                </button>
            `;
            
            // Update hero buttons
            document.getElementById('heroButtons').innerHTML = `
                <button class="btn-primary btn-large hover-scale animate-bounce-gentle" onclick="document.getElementById('skillsModal').classList.add('active')">
                    ⚡ Explore Skills
                </button>
            `;
            
            // Hide CTA section
            document.getElementById('ctaSection').style.display = 'none';
        }

        // Skills functions
        function initializeSkills() {
            const teachContainer = document.getElementById('teachSkills');
            const learnContainer = document.getElementById('learnSkills');
            
            availableSkills.forEach(skill => {
                // Create teach skill badge
                const teachBadge = document.createElement('span');
                teachBadge.className = 'skill-badge';
                teachBadge.textContent = skill;
                teachBadge.onclick = () => toggleSkill(skill, 'teach', teachBadge);
                teachContainer.appendChild(teachBadge);
                
                // Create learn skill badge
                const learnBadge = document.createElement('span');
                learnBadge.className = 'skill-badge';
                learnBadge.textContent = skill;
                learnBadge.onclick = () => toggleSkill(skill, 'learn', learnBadge);
                learnContainer.appendChild(learnBadge);
            });
        }

        function switchSkillTab(tab) {
            currentSkillTab = tab;
            
            // Remove active class from all tabs
            document.querySelectorAll('#skillsModal .tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('#skillsModal .tab-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to selected tab
            document.getElementById(tab + 'Tab').classList.add('active');
            document.getElementById(tab + '-skills-tab').classList.add('active');
            
            updateSelectedSkillsDisplay();
        }

        function toggleSkill(skill, type, badge) {
            if (type === 'teach') {
                if (selectedTeachSkills.includes(skill)) {
                    selectedTeachSkills = selectedTeachSkills.filter(s => s !== skill);
                    badge.classList.remove('selected');
                } else {
                    selectedTeachSkills.push(skill);
                    badge.classList.add('selected');
                }
            } else {
                if (selectedLearnSkills.includes(skill)) {
                    selectedLearnSkills = selectedLearnSkills.filter(s => s !== skill);
                    badge.classList.remove('selected');
                } else {
                    selectedLearnSkills.push(skill);
                    badge.classList.add('selected');
                }
            }
            
            updateSelectedSkillsDisplay();
        }

        function addCustomSkill(type) {
            const input = document.getElementById('custom' + (type === 'teach' ? 'Teach' : 'Learn') + 'Skill');
            const skill = input.value.trim();
            
            if (skill) {
                if (type === 'teach') {
                    if (!selectedTeachSkills.includes(skill)) {
                        selectedTeachSkills.push(skill);
                        showToast(`Added "${skill}" to teaching skills! 💡`);
                    }
                } else {
                    if (!selectedLearnSkills.includes(skill)) {
                        selectedLearnSkills.push(skill);
                        showToast(`Added "${skill}" to learning goals! 📚`);
                    }
                }
                input.value = '';
                updateSelectedSkillsDisplay();
            }
        }

        function updateSelectedSkillsDisplay() {
            const display = document.getElementById('selectedSkillsDisplay');
            const title = document.getElementById('selectedSkillsTitle');
            const skills = currentSkillTab === 'teach' ? selectedTeachSkills : selectedLearnSkills;
            const skillType = currentSkillTab === 'teach' ? 'Teaching' : 'Learning';
            
            title.textContent = `Selected ${skillType} Skills (${skills.length})`;
            
            if (skills.length === 0) {
                display.innerHTML = '<p style="color: #9ca3af; font-size: 14px;">No skills selected yet</p>';
            } else {
                display.innerHTML = skills.map(skill => 
                    `<span class="badge hover-scale" style="background: ${currentSkillTab === 'teach' ? 'linear-gradient(135deg, #7c3aed, #a855f7)' : 'linear-gradient(135deg, #2563eb, #3b82f6)'}; margin-right: 8px; margin-bottom: 8px;">${skill}</span>`
                ).join('');
            }
        }

        function saveSkills() {
            if (selectedTeachSkills.length === 0 && selectedLearnSkills.length === 0) {
                showToast('Please select at least one skill! 🎯', 'error');
                return;
            }

            const btn = document.getElementById('saveSkillsBtn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<span class="loading"></span> Finding Matches...';
            btn.disabled = true;

            setTimeout(() => {
                closeModal('skillsModal');
                showToast('Skills saved! Finding perfect matches for you... 🎉');
                btn.innerHTML = originalText;
                btn.disabled = false;
                
                setTimeout(() => {
                    showVideoSession();
                }, 1000);
            }, 1500);
        }

        // Profile functions
        function openProfileModal() {
            updateProfileDisplay();
            document.getElementById('profileModal').classList.add('active');
        }

        function updateProfileDisplay() {
            document.getElementById('profileName').textContent = currentUser.name;
            document.getElementById('profileEmail').textContent = currentUser.email;
            document.getElementById('joinDate').textContent = new Date(currentUser.joinedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
            document.getElementById('sessionsCount').textContent = currentUser.sessionsCompleted;
            document.getElementById('teachingCount').textContent = selectedTeachSkills.length;
            document.getElementById('learningCount').textContent = selectedLearnSkills.length;
            
            // Update skills display
            const teachingSkillsEl = document.getElementById('profileTeachingSkills');
            const learningSkillsEl = document.getElementById('profileLearningSkills');
            
            if (selectedTeachSkills.length > 0) {
                teachingSkillsEl.innerHTML = selectedTeachSkills.map(skill => 
                    `<span class="badge" style="background: linear-gradient(135deg, #7c3aed, #a855f7); margin-right: 8px; margin-bottom: 8px;">${skill}</span>`
                ).join('');
            } else {
                teachingSkillsEl.innerHTML = '<p style="color: #9ca3af; font-size: 14px;">No teaching skills yet</p>';
            }
            
            if (selectedLearnSkills.length > 0) {
                learningSkillsEl.innerHTML = selectedLearnSkills.map(skill => 
                    `<span class="badge" style="background: linear-gradient(135deg, #2563eb, #3b82f6); margin-right: 8px; margin-bottom: 8px;">${skill}</span>`
                ).join('');
            } else {
                learningSkillsEl.innerHTML = '<p style="color: #9ca3af; font-size: 14px;">No learning goals yet</p>';
            }
        }

        function handleAvatarUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('avatarDisplay').innerHTML = `<img src="${e.target.result}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
                    currentUser.avatar = e.target.result;
                    showToast('Profile photo updated! 📸');
                };
                reader.readAsDataURL(file);
            }
        }

        function editProfile() {
            // Simple edit functionality - could be expanded
            const newName = prompt('Enter your name:', currentUser.name);
            if (newName && newName.trim()) {
                currentUser.name = newName.trim();
                updateProfileDisplay();
                showToast('Profile updated! ✨');
            }
        }

        function openSkillsFromProfile() {
            closeModal('profileModal');
            setTimeout(() => {
                document.getElementById('skillsModal').classList.add('active');
            }, 300);
        }

        // Video session functions
        function showVideoSession() {
            document.getElementById('mainContent').style.display = 'none';
            document.getElementById('videoSession').classList.add('active');
            document.getElementById('userName').textContent = currentUser.name;
        }

        function toggleSession() {
            const button = document.getElementById('sessionToggle');
            const partnerStatus = document.getElementById('partnerStatus');
            const partnerDot = document.getElementById('partnerDot');
            const sessionMessage = document.getElementById('sessionMessage');
            const partnerVideo = document.getElementById('partnerVideo');
            
            if (!sessionStarted) {
                sessionStarted = true;
                button.innerHTML = '⏹️ End Session';
                button.className = 'btn-destructive hover-scale';
                partnerStatus.textContent = 'Video Connected';
                partnerDot.classList.remove('hidden');
                partnerVideo.classList.add('active');
                sessionMessage.classList.remove('hidden');
                
                // Start timer
                sessionTimer = setInterval(() => {
                    sessionTime++;
                    document.getElementById('sessionTimer').textContent = formatTime(sessionTime);
                }, 1000);
                
                showToast('🎉 Session started! Start sharing your knowledge.');
            } else {
                showExitConfirm();
            }
        }

        function showExitConfirm() {
            document.getElementById('exitModal').classList.add('active');
        }

        function endSession() {
            sessionStarted = false;
            sessionTime = 0;
            clearInterval(sessionTimer);
            
            const button = document.getElementById('sessionToggle');
            const partnerStatus = document.getElementById('partnerStatus');
            const partnerDot = document.getElementById('partnerDot');
            const sessionMessage = document.getElementById('sessionMessage');
            const partnerVideo = document.getElementById('partnerVideo');
            
            button.innerHTML = '▶️ Start Session';
            button.className = 'btn-success hover-scale';
            partnerStatus.textContent = 'Waiting to connect...';
            partnerDot.classList.add('hidden');
            partnerVideo.classList.remove('active');
            sessionMessage.classList.add('hidden');
            document.getElementById('sessionTimer').textContent = '00:00';
            
            closeModal('exitModal');
            showToast('Session completed successfully! 🎉');
            
            // Update user stats
            currentUser.sessionsCompleted++;
            
            setTimeout(() => {
                document.getElementById('videoSession').classList.remove('active');
                document.getElementById('mainContent').style.display = 'block';
            }, 1000);
        }

        function toggleMute() {
            isMuted = !isMuted;
            const btn = document.getElementById('muteBtn');
            btn.innerHTML = isMuted ? '🔇 Unmute Audio' : '🎤 Mute Audio';
            btn.className = isMuted ? 'btn-destructive control-btn hover-scale' : 'btn-outline control-btn hover-scale';
            showToast(isMuted ? 'Microphone muted' : 'Microphone unmuted');
        }

        function toggleVideo() {
            isVideoOff = !isVideoOff;
            const btn = document.getElementById('videoBtn');
            const userVideo = document.getElementById('userVideo');
            
            btn.innerHTML = isVideoOff ? '📹 Turn On Video' : '📹 Turn Off Video';
            btn.className = isVideoOff ? 'btn-destructive control-btn hover-scale' : 'btn-outline control-btn hover-scale';
            
            if (isVideoOff) {
                userVideo.style.opacity = '0.5';
                userVideo.innerHTML += '<div style="position: absolute; inset: 0; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; font-size: 32px;">📹❌</div>';
            } else {
                userVideo.style.opacity = '1';
                const overlay = userVideo.querySelector('div[style*="position: absolute"]');
                if (overlay) overlay.remove();
            }
            
            showToast(isVideoOff ? 'Camera turned off' : 'Camera turned on');
        }

        function shareScreen() {
            showToast('Screen sharing feature coming soon! 🖥️');
        }

        function openChat() {
            showToast('Chat feature coming soon! 💬');
        }

        function openSettings() {
            showToast('Settings panel coming soon! ⚙️');
        }

        // Event listeners
        document.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                if (e.target.id === 'customTeachSkill') {
                    addCustomSkill('teach');
                } else if (e.target.id === 'customLearnSkill') {
                    addCustomSkill('learn');
                }
            }
        });

        // Close modals when clicking outside
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('modal')) {
                const modalId = e.target.id;
                closeModal(modalId);
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (sessionStarted) {
                if (e.key === 'm' || e.key === 'M') {
                    toggleMute();
                } else if (e.key === 'v' || e.key === 'V') {
                    toggleVideo();
                }
            }
            
            if (e.key === 'Escape') {
                const activeModal = document.querySelector('.modal.active');
                if (activeModal) {
                    closeModal(activeModal.id);
                }
            }
        });

        // Add CSS animations for toasts
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);