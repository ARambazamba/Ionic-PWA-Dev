$androidHome = "C:\Users\$env:username\AppData\Local\Android\Sdk"
[Environment]::SetEnvironmentVariable("ANDROID_HOME", $androidHome, "User")
[Environment]::SetEnvironmentVariable("ANDROID_SDK_HOME", $androidHome, "User")

$binTools = "C:\Users\$env:username\AppData\Local\Android\Sdk\tools\bin"
[Environment]::SetEnvironmentVariable("ANDROID_BIN_Tools", $binTools, "User")

$javaHome = "$env:programfiles\Java\jdk1.8.0_171"
[Environment]::SetEnvironmentVariable("JAVA_HOME", $javaHome, "User")

Function Set-PathVariable {
    param (
        [parameter(Mandatory = $true)]
        [String]$newPath,
    
        [ValidateSet('Process', 'User', 'Machine')]
        [String]$Scope = 'User'
    )
  
    $newPath = $env:Path + $newPath
  
    try {
        [System.Environment]::SetEnvironmentVariable('Path', $newPath, $Scope)  
    }
    catch {
        "Error was $_"
        $line = $_.InvocationInfo.ScriptLineNumber
        "Error was in Line $line"
        return
    }
} 


$platformTools = "C:\Users\$env:username\AppData\Local\Android\Sdk\platform-tools"
$sdkTools = "C:\Users\$env:username\AppData\Local\Android\Sdk\tools"

Set-PathVariable -newPath $platformTools -Scope User 
Set-PathVariable -newPath $sdkTools -Scope User 


Write-Host "Variables created"