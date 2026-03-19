import React from 'react'

import { useState } from "react";

export default function AccountSettings() {
  const [settings, setSettings] = useState({
    dailyReminder: true,
    dailyGoal: false,
    notifications: true,
    weeklyDigest: true,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full ">

        {/* Header */}
        <h1 className="text-2xl font-bold">Account Settings</h1>
        <p className="text-sm text-gray-500 mb-6">
          Manage your learning experience, notifications, and security settings.
        </p>

        {/* Section */}
        <Section>
          <h2 className='flex gap-2 font-bold text-2xl'>
           <img src="/left.svg" alt="" /> Active Learning Tracks
          </h2>
          <ToggleItem
            title="Daily Reminder"
            description="Receive a push notification to keep your learning streak alive."
            enabled={settings.dailyReminder}
            onToggle={() => toggleSetting("dailyReminder")}
          />
          <ToggleItem
            title="Daily Goal"
            description="Set a target study time of 30 minutes per day."
            enabled={settings.dailyGoal}
            onToggle={() => toggleSetting("dailyGoal")}
          />
        </Section>

        <Section>
          <h2 className='font-bold text-2xl flex gap-2'>
            <img src="/message.svg" alt="" />
            Communication Preferences
          </h2>
          <ToggleItem
            title="In-app Notifications"
            description="Get updates about course progress and new replies."
            enabled={settings.notifications}
            onToggle={() => toggleSetting("notifications")}
          />
          <ToggleItem
            title="Weekly Email Digest"
            description="A summary of your learning accomplishments every Sunday."
            enabled={settings.weeklyDigest}
            onToggle={() => toggleSetting("weeklyDigest")}
          />
        </Section>

        <Section>
          <h3 className='font-bold text-2xl gap-2 flex '>
            <img src="/HHI.svg" alt="" />
            Security & Privacy
          </h3>
          <ActionItem
            title="Two-Factor Authentication"
            description="Add an extra layer of security to your account via SMS or Auth App."
            button="Enable"
          />
          <ActionItem
            title="Privacy Profile"
            description="Decide who can see your learning progress and certificates."
            button="Public"
            arrow
          />
        </Section>
      </div>
    </div>
  );
}

/* Section Wrapper */
function Section({ title, children }) {
  return (
    <div className="mb-6">
      <h2 className="text-sm font-bold mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

/* Toggle Item */
function ToggleItem({ title, description, enabled, onToggle }) {
  return (
    <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm">
      <div>
        <p className="text-sm font-bold">{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>

      <button
        onClick={onToggle}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
          enabled ? "bg-orange-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
            enabled ? "translate-x-6" : ""
          }`}
        />
      </button>
    </div>
  );
}

/* Action Item */
function ActionItem({ title, description, button, arrow }) {
  return (
    <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>

      {arrow ? (
        <span className="text-sm text-gray-400 flex items-center gap-1">
          {button} →
        </span>
      ) : (
        <button className="bg-orange-100 text-orange-500 px-3 py-1 rounded-lg text-sm">
          {button}
        </button>
      )}
    </div>
  );
}